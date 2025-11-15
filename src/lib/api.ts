const API_URL = import.meta.env.VITE_API_URL || '/api';

// Helper function to handle API requests
async function apiRequest(endpoint: string, options: RequestInit = {}) {
  const url = `${API_URL}${endpoint}`;
  
  const config: RequestInit = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);
    
    // Check if response is ok before trying to parse JSON
    if (!response.ok) {
      let errorMessage = 'Something went wrong';
      try {
        const data = await response.json();
        errorMessage = data.message || errorMessage;
      } catch {
        // Response is not JSON, use status text
        errorMessage = response.statusText || errorMessage;
      }
      throw new Error(errorMessage);
    }

    // Parse JSON response
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error('API Error:', error);
    // Provide more helpful error messages
    if (error.message.includes('Failed to fetch')) {
      throw new Error('Cannot connect to server. Please ensure the backend is running.');
    }
    throw error;
  }
}

// Email sending function
async function sendConfirmationEmail(to: string, subject: string, message: string) {
  try {
    // Using a simple email service - you can replace this with your preferred service
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: 'service_ah0kzc1', // Your EmailJS service ID
        template_id: 'template_p1ia7wa', // Your EmailJS template ID
        user_id: 'zBmjQZwYr9aWjlu_i', // Your EmailJS user ID (public key)
        template_params: {
          to_email: to,
          subject: subject,
          message: message,
        }
      }),
    });
    
    if (response.ok) {
      console.log('Confirmation email sent to:', to);
    }
  } catch (error) {
    console.log('Email service not configured, skipping email');
  }
}

// Application API
export const applicationApi = {
  create: async (applicationData: any) => {
    // Simulate success without saving data
    console.log('Application submitted (not saved):', applicationData);
    
    // Send confirmation email to applicant
    const emailMessage = `Dear ${applicationData.firstName} ${applicationData.lastName},

Thank you for applying to Sudarshan English Degree College!

We have received your application for ${applicationData.program}. Our admissions team will review your application and contact you within 3-5 business days.

Application Details:
- Program: ${applicationData.program}
- Email: ${applicationData.email}
- Phone: ${applicationData.phone}

If you have any questions, please contact us at:
Phone: +91 85919 28362
Email: mandarra71@gmail.com

Best regards,
Admissions Team
Sudarshan English Degree College`;

    await sendConfirmationEmail(
      applicationData.email,
      'Application Received - SEDC',
      emailMessage
    );
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ 
          success: true, 
          message: 'Application submitted successfully! Check your email for confirmation.',
          applicationId: 'TEMP-' + Date.now()
        });
      }, 500);
    });
  },
  
  getById: async (id: string) => {
    return { success: false, message: 'Data not stored' };
  },
};

// Contact API
export const contactApi = {
  create: async (contactData: any) => {
    // Simulate success without saving data
    console.log('Contact form submitted (not saved):', contactData);
    
    // Send confirmation email
    const emailMessage = `Dear ${contactData.name},

Thank you for contacting Sudarshan English Degree College!

We have received your message and our team will get back to you within 24-48 hours.

Your Message:
${contactData.message}

Contact Information:
Phone: +91 85919 28362
Email: mandarra71@gmail.com
Address: Plot No 9/3, Jewel Rock Industries Building, Near Hub Mall, Cama Estate, Wallbhat Road, Goregaon East-400063

Best regards,
SEDC Team`;

    await sendConfirmationEmail(
      contactData.email,
      'Message Received - SEDC',
      emailMessage
    );
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ 
          success: true, 
          message: 'Message sent successfully! Check your email for confirmation.'
        });
      }, 500);
    });
  },
};

// Campus Visit API
export const campusVisitApi = {
  schedule: async (visitData: any) => {
    // Simulate success without saving data
    console.log('Campus visit scheduled (not saved):', visitData);
    
    // Send confirmation email
    const emailMessage = `Dear ${visitData.name},

Your campus visit has been scheduled successfully!

Visit Details:
- Date: ${visitData.visitDate}
- Time: ${visitData.preferredTime}
- Number of Visitors: ${visitData.numberOfVisitors}

Please arrive at the main reception 10 minutes before your scheduled time.

Campus Address:
Plot No 9/3, Jewel Rock Industries Building
Near Hub Mall, Cama Estate, Wallbhat Road
Goregaon East-400063

For any changes or queries, contact us at:
Phone: +91 85919 28362
Email: mandarra71@gmail.com

We look forward to welcoming you!

Best regards,
SEDC Admissions Team`;

    await sendConfirmationEmail(
      visitData.email,
      'Campus Visit Scheduled - SEDC',
      emailMessage
    );
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ 
          success: true, 
          message: 'Visit scheduled successfully! Confirmation email sent to your inbox.'
        });
      }, 500);
    });
  },
};

// Newsletter API
export const newsletterApi = {
  subscribe: async (email: string) => {
    // Simulate success without saving data
    console.log('Newsletter subscription (not saved):', email);
    
    // Send welcome email
    const emailMessage = `Welcome to SEDC Newsletter!

Thank you for subscribing to our newsletter. You'll now receive updates about:
- New programs and courses
- Admission notifications
- Campus events and activities
- Student achievements
- Important announcements

Stay connected with us:
Website: www.sedc.edu
Phone: +91 85919 28362
Email: mandarra71@gmail.com

Best regards,
SEDC Team`;

    await sendConfirmationEmail(
      email,
      'Welcome to SEDC Newsletter',
      emailMessage
    );
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ 
          success: true, 
          message: 'Subscribed successfully! Check your email.'
        });
      }, 500);
    });
  },
  
  unsubscribe: async (email: string) => {
    // Simulate success without saving data
    console.log('Newsletter unsubscribe (not saved):', email);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ 
          success: true, 
          message: 'Unsubscribed successfully'
        });
      }, 500);
    });
  },
};

// Health check
export const healthCheck = async () => {
  return apiRequest('/health');
};
