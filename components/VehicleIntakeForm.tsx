import React, { useState } from 'react';

const VehicleIntakeForm: React.FC = () => {
  const [form, setForm] = useState({
    year: '',
    make: '',
    model: '',
    engineSize: '',
    vin: '',
    notes: '',
    name: '',
    email: '',
    phone: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

   const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      // Prepare data for API (matching your form field names)
      const formData = {
        year: form.year,
        make: form.make,
        model: form.model,
        engineSize: form.engineSize,
        vin: form.vin,
        notes: form.notes,
        name: form.name,
        email: form.email,
        phone: form.phone
      };

      const response = await fetch('/api/send-vehicle-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Success
        setSuccessMessage(data.message || 'Form submitted successfully!');
        setSubmitted(true);
        
        // Reset form
        setForm({
          year: '',
          make: '',
          model: '',
          engineSize: '',
          vin: '',
          notes: '',
          name: '',
          email: '',
          phone: '',
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSuccessMessage(null);
        }, 5000);
      } else {
        // API returned an error
        setError(data.error || 'Failed to submit form. Please try again.');
        console.error('API Error:', data);
      }
    } catch (err) {
      // Network error or other fetch issues
      console.error('Fetch Error:', err);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const clearForm = () => {
    setForm({
      year: '',
      make: '',
      model: '',
      engineSize: '',
      vin: '',
      notes: '',
      name: '',
      email: '',
      phone: '',
    });
    setError(null);
    setSuccessMessage(null);
  };

  return (
    <section id="vehicle-intake" className="py-20 bg-[#F7FAFC]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="reveal mb-12">
            <h2 className="text-[#003366] font-bold text-sm tracking-widest uppercase mb-3">
              Engine Analysis
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#003366] tracking-tight mb-4">
              Submit Your Vehicle Details
            </h3>
            <p className="text-lg text-[#4A5568] leading-relaxed">
              Tell us about your engine. We'll review the specifics and provide a verified recommendation — based on real diagnostics, not guessing.
            </p>
          </div>
          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-red-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <p className="text-red-700 font-medium">{error}</p>
              </div>
              <p className="text-red-600 text-sm mt-2">
                Please check your information and try again, or contact us directly.
              </p>
            </div>
          )}

          {/* Success Message */}
          {successMessage && !submitted && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-green-700 font-medium">{successMessage}</p>
              </div>
            </div>
          )}

          {!submitted ? (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-[#4A5568]/10 shadow-md p-8 md:p-10">
              {/* Vehicle Details Section */}
              <div className="mb-10 pb-8 border-b border-[#4A5568]/10">
                <h4 className="text-xl font-bold text-[#003366] mb-6 flex items-center gap-2">
                  <span className="text-2xl">🔧</span> Vehicle Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#1A202C] mb-2">Year *</label>
                    <input
                      type="text"
                      name="year"
                      value={form.year}
                      onChange={handleChange}
                      placeholder="e.g., 2015"
                      required
                      className="w-full px-4 py-3 rounded border border-[#E2E8F0] focus:border-[#003366] focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1A202C] mb-2">Make *</label>
                    <input
                      type="text"
                      name="make"
                      value={form.make}
                      onChange={handleChange}
                      placeholder="e.g., Ford, Chevy, Ram"
                      required
                      className="w-full px-4 py-3 rounded border border-[#E2E8F0] focus:border-[#003366] focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1A202C] mb-2">Model *</label>
                    <input
                      type="text"
                      name="model"
                      value={form.model}
                      onChange={handleChange}
                      placeholder="e.g., F-250, Silverado, 1500"
                      required
                      className="w-full px-4 py-3 rounded border border-[#E2E8F0] focus:border-[#003366] focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1A202C] mb-2">Engine Size *</label>
                    <input
                      type="text"
                      name="engineSize"
                      value={form.engineSize}
                      onChange={handleChange}
                      placeholder="e.g., 5.4L V8, 6.6L Duramax"
                      required
                      className="w-full px-4 py-3 rounded border border-[#E2E8F0] focus:border-[#003366] focus:outline-none transition"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-[#1A202C] mb-2">VIN (Optional)</label>
                    <input
                      type="text"
                      name="vin"
                      value={form.vin}
                      onChange={handleChange}
                      placeholder="Vehicle Identification Number (17 characters)"
                      className="w-full px-4 py-3 rounded border border-[#E2E8F0] focus:border-[#003366] focus:outline-none transition"
                    />
                  </div>
                </div>
              </div>

              {/* Notes Section */}
              <div className="mb-10 pb-8 border-b border-[#4A5568]/10">
                <h4 className="text-xl font-bold text-[#003366] mb-6 flex items-center gap-2">
                  <span className="text-2xl">📝</span> Additional Details
                </h4>
                <div>
                  <label className="block text-sm font-semibold text-[#1A202C] mb-2">
                    Current Issue or Diagnostics
                  </label>
                  <textarea
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    placeholder="Describe the current engine problem, previous findings, or diagnostics performed (optional)"
                    className="w-full px-4 py-3 rounded border border-[#E2E8F0] focus:border-[#003366] focus:outline-none transition h-28"
                  />
                </div>
              </div>

              {/* Contact Section */}
              <div className="mb-10">
                <h4 className="text-xl font-bold text-[#003366] mb-6 flex items-center gap-2">
                  <span className="text-2xl">📞</span> Your Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#1A202C] mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full px-4 py-3 rounded border border-[#E2E8F0] focus:border-[#003366] focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1A202C] mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-3 rounded border border-[#E2E8F0] focus:border-[#003366] focus:outline-none transition"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-[#1A202C] mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      required
                      className="w-full px-4 py-3 rounded border border-[#E2E8F0] focus:border-[#003366] focus:outline-none transition"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex gap-4 items-center">
                <button
                  type="submit"
                  disabled={loading}
                  className={`flex items-center justify-center gap-2 bg-[#003366] text-white px-8 py-4 rounded font-bold md:text-lg text-sm transition-all ${
                    loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#002244] hover:shadow-lg hover:-translate-y-0.5'
                  }`}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    'Submit for Recommendation'
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setForm({ year: '', make: '', model: '', engineSize: '', vin: '', notes: '', name: '', email: '', phone: '' })}
                  className="text-[#003366] px-6 py-2 font-semibold hover:text-[#002244] transition border border-[#003366] rounded-lg"
                >
                  Clear Form
                </button>
              </div>

              <p className="text-xs text-[#4A5568] mt-6">
                ✓ Required fields marked with *. We'll review your engine details and contact you within 3 business day.
              </p>
            </form>
          ) : (
            <div className="bg-[#E6F0FF] border-2 border-[#003366] rounded-2xl p-10 text-center">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-bold text-[#003366] mb-3">Submission Received</h3>
              <p className="text-[#4A5568] mb-6">
                Your vehicle details have been submitted. 
              </p>
              <div className="space-y-3">
                <p className="text-lg font-semibold text-[#1A202C]">
                  📞 <a href="tel:+18184099494" className="text-[#003366] hover:underline">(818) 409-9494</a>
                </p>
                <p className="text-lg font-semibold text-[#1A202C]">
                  📧 <a href="mailto:info@modernenginepros.com" className="text-[#003366] hover:underline">info@modernenginepros.com</a>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VehicleIntakeForm;
