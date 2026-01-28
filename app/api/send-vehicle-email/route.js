import nodemailer from 'nodemailer';

// Helper function to validate email
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

export async function POST(request) {
    try {
        const data = await request.json();

        // Validate required fields
        const requiredFields = ['make', 'model', 'engineSize', 'name', 'email'];
        const missingFields = requiredFields.filter(field => !data[field]);

        if (missingFields.length > 0) {
            return Response.json(
                {
                    success: false,
                    error: `Missing required fields: ${missingFields.join(', ')}`
                },
                { status: 400 }
            );
        }

        // Validate email format
        if (!isValidEmail(data.email)) {
            return Response.json(
                { success: false, error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: parseInt(process.env.EMAIL_PORT || '587'),
            secure: process.env.EMAIL_PORT === '465', // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            // Optional: Add timeout settings
            connectionTimeout: 10000, // 10 seconds
            greetingTimeout: 10000,
            socketTimeout: 15000,
        });

        // Verify connection configuration
        try {
            await transporter.verify();
            console.log('SMTP connection verified successfully');
        } catch (verifyError) {
            console.error('SMTP connection failed:', verifyError);
            return Response.json(
                {
                    success: false,
                    error: 'Email service configuration error. Please contact support.'
                },
                { status: 500 }
            );
        }

        // Format date
        const now = new Date();
        const formattedDate = now.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZoneName: 'short'
        });

        // Prepare email to admin
        const adminMailOptions = {
            from: {
                name: process.env.NEXT_PUBLIC_COMPANY_NAME || 'Modern Engine Pros',
                address: process.env.EMAIL_USER
            },
            to: process.env.RECIPIENT_EMAIL,
            replyTo: data.email,
            subject: `🚗 New Vehicle Intake: ${data.make} ${data.model} ${data.year || ''}`.trim(),
            html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Vehicle Intake Submission</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              margin: 0;
              padding: 0;
              background-color: #f7fafc;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background: white;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .header {
              background: linear-gradient(135deg, #003366 0%, #002244 100%);
              color: white;
              padding: 32px 24px;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
              font-weight: bold;
            }
            .header .subtitle {
              margin: 8px 0 0;
              opacity: 0.9;
              font-size: 14px;
            }
            .content {
              padding: 32px 24px;
            }
            .section {
              margin-bottom: 32px;
              border: 1px solid #e2e8f0;
              border-radius: 8px;
              overflow: hidden;
            }
            .section-header {
              background-color: #f8fafc;
              padding: 16px 24px;
              border-bottom: 1px solid #e2e8f0;
              font-weight: bold;
              color: #003366;
              font-size: 18px;
            }
            .section-content {
              padding: 24px;
            }
            .field {
              margin-bottom: 16px;
              display: flex;
              flex-wrap: wrap;
            }
            .field:last-child {
              margin-bottom: 0;
            }
            .field-label {
              font-weight: 600;
              color: #4a5568;
              width: 160px;
              min-width: 160px;
              padding-right: 16px;
            }
            .field-value {
              flex: 1;
              color: #2d3748;
              word-break: break-word;
            }
            .footer {
              background-color: #f8fafc;
              padding: 24px;
              text-align: center;
              border-top: 1px solid #e2e8f0;
              color: #718096;
              font-size: 14px;
            }
            .highlight {
              background-color: #e6f0ff;
              padding: 4px 8px;
              border-radius: 4px;
              border-left: 4px solid #003366;
            }
            .empty {
              color: #a0aec0;
              font-style: italic;
            }
            @media (max-width: 600px) {
              .container {
                border-radius: 0;
                box-shadow: none;
              }
              .field {
                flex-direction: column;
              }
              .field-label {
                width: 100%;
                margin-bottom: 4px;
              }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Vehicle Intake Submission</h1>
              <div class="subtitle">${formattedDate}</div>
            </div>
            
            <div class="content">
              <div class="section">
                <div class="section-header">🚗 Vehicle Information</div>
                <div class="section-content">
                  <div class="field">
                    <div class="field-label">Year:</div>
                    <div class="field-value ${!data.year ? 'empty' : ''}">
                      ${data.year || 'Not provided'}
                    </div>
                  </div>
                  <div class="field">
                    <div class="field-label">Make:</div>
                    <div class="field-value highlight">${data.make}</div>
                  </div>
                  <div class="field">
                    <div class="field-label">Model:</div>
                    <div class="field-value highlight">${data.model}</div>
                  </div>
                  <div class="field">
                    <div class="field-label">Engine Size:</div>
                    <div class="field-value highlight">${data.engineSize}</div>
                  </div>
                  <div class="field">
                    <div class="field-label">VIN:</div>
                    <div class="field-value ${!data.vin ? 'empty' : ''}">
                      ${data.vin || 'Not provided'}
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="section">
                <div class="section-header">📝 Additional Details</div>
                <div class="section-content">
                  <div class="field">
                    <div class="field-value ${!data.notes ? 'empty' : ''}">
                      ${data.notes ? data.notes.replace(/\\n/g, '<br>') : 'No additional details provided'}
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="section">
                <div class="section-header">👤 Contact Information</div>
                <div class="section-content">
                  <div class="field">
                    <div class="field-label">Full Name:</div>
                    <div class="field-value highlight">${data.name}</div>
                  </div>
                  <div class="field">
                    <div class="field-label">Email:</div>
                    <div class="field-value">
                      <a href="mailto:${data.email}" style="color: #003366; text-decoration: none;">
                        ${data.email}
                      </a>
                    </div>
                  </div>
                  <div class="field">
                    <div class="field-label">Phone:</div>
                    <div class="field-value">
                      ${data.phone ?
                    `<a href="tel:${data.phone.replace(/[^\\d+]/g, '')}" style="color: #003366; text-decoration: none;">
                          ${data.phone}
                        </a>` :
                    'Not provided'
                }
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="footer">
              <p>
                Submitted via ${process.env.NEXT_PUBLIC_COMPANY_NAME || 'Modern Engine Pros'} Vehicle Intake Form
              </p>
              <p style="margin-top: 8px; font-size: 12px;">
                Submission ID: ${Date.now()}-${Math.random().toString(36).substr(2, 9)}
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
            // Plain text version for email clients that don't support HTML
            text: `
NEW VEHICLE INTAKE SUBMISSION
=============================

Date: ${formattedDate}

VEHICLE INFORMATION
-------------------
Year: ${data.year || 'Not provided'}
Make: ${data.make}
Model: ${data.model}
Engine Size: ${data.engineSize}
VIN: ${data.vin || 'Not provided'}

ADDITIONAL DETAILS
------------------
${data.notes || 'No additional details provided'}

CONTACT INFORMATION
-------------------
Full Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}

--
Submitted via ${process.env.NEXT_PUBLIC_COMPANY_NAME || 'Modern Engine Pros'} Vehicle Intake Form
      `
        };

        // Send email to admin
        const adminResult = await transporter.sendMail(adminMailOptions);
        console.log('Admin email sent:', adminResult.messageId);

        // Send confirmation email to user (optional)
        if (process.env.SEND_CONFIRMATION === 'true') {
            const userMailOptions = {
                from: {
                    name: process.env.NEXT_PUBLIC_COMPANY_NAME || 'Modern Engine Pros',
                    address: process.env.EMAIL_USER
                },
                to: data.email,
                subject: `Thank you for your vehicle submission, ${data.name.split(' ')[0]}!`,
                html: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #003366; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; }
              .details { background: white; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #003366; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Thank You for Your Submission!</h1>
              </div>
              <div class="content">
                <p>Dear ${data.name},</p>
                
                <p>We have received your vehicle details for your <strong>${data.year || ''} ${data.make} ${data.model}</strong>.</p>
                
                <div class="details">
                  <p><strong>What happens next:</strong></p>
                  <ol>
                    <li>Our engine specialists will review your submission</li>
                    <li>We'll analyze the specifics of your ${data.engineSize} engine</li>
                    <li>You'll receive a personalized recommendation based on real diagnostics</li>
                  </ol>
                </div>
                
                <p><strong>Our Commitment:</strong> We'll contact you within <strong>3 business day</strong> with our initial assessment.</p>
                
                <p>If you have any urgent questions, feel free to contact us directly:</p>
                <p>
                  📞 <strong>${process.env.NEXT_PUBLIC_COMPANY_PHONE || '(818) 409-9494'}</strong><br>
                  📧 <strong>${process.env.RECIPIENT_EMAIL || 'info@modernenginepros.com'}</strong>
                </p>
                
                <p>Thank you for choosing ${process.env.NEXT_PUBLIC_COMPANY_NAME || 'Modern Engine Pros'}!</p>
                
                <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #718096;">
                  This is an automated confirmation. Please do not reply to this email.
                </p>
              </div>
            </div>
          </body>
          </html>
        `,
                text: `
Thank you for your submission!

Dear ${data.name},

We have received your vehicle details for your ${data.year || ''} ${data.make} ${data.model}.

Our engine specialists will review your submission and analyze the specifics of your ${data.engineSize} engine. You'll receive a personalized recommendation based on real diagnostics.

Our Commitment: We'll contact you within 1 business day with our initial assessment.

If you have any urgent questions, feel free to contact us directly:
📞 ${process.env.NEXT_PUBLIC_COMPANY_PHONE || '(818) 409-9494'}
📧 ${process.env.RECIPIENT_EMAIL || 'info@modernenginepros.com'}

Thank you for choosing ${process.env.NEXT_PUBLIC_COMPANY_NAME || 'Modern Engine Pros'}!

--
This is an automated confirmation. Please do not reply to this email.
        `
            };

            await transporter.sendMail(userMailOptions);
            console.log('Confirmation email sent to user');
        }

        return Response.json(
            {
                success: true,
                message: 'Form submitted successfully! We will contact you within 1 business day.',
                emailSent: true
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('Detailed error sending email:', error);

        // More specific error messages
        let errorMessage = 'Failed to submit form. Please try again later.';
        if (error.code === 'EAUTH') {
            errorMessage = 'Email authentication failed. Please contact support.';
        } else if (error.code === 'ECONNECTION') {
            errorMessage = 'Unable to connect to email service. Please try again.';
        }

        return Response.json(
            {
                success: false,
                error: errorMessage,
                debug: process.env.NODE_ENV === 'development' ? error.message : undefined
            },
            { status: 500 }
        );
    }
}

// Optional: Add GET method to verify endpoint is working
export async function GET() {
    return Response.json(
        {
            status: 'active',
            service: 'Vehicle Intake Email API',
            message: 'POST to this endpoint to submit vehicle intake forms'
        },
        { status: 200 }
    );
}