import { Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Information We Collect",
      content: `We collect information you provide directly to us, such as when you create an account, update your profile, or communicate with us. This includes:

• **Account Information**: Name, email address, company name, job title, and professional details.
• **Profile Information**: Skills, interests, career goals, and preferences you share to improve matching.
• **Communications**: Messages you send to other users and to our support team.
• **Usage Data**: How you interact with our platform, including matches viewed and connections made.`,
    },
    {
      title: "How We Use Your Information",
      content: `We use the information we collect to:

• Provide, maintain, and improve our services
• Match you with other professionals based on skills, goals, and compatibility
• Send you notifications about matches, messages, and platform updates
• Respond to your comments, questions, and requests
• Monitor and analyze trends, usage, and activities
• Detect, investigate, and prevent fraudulent transactions and other illegal activities`,
    },
    {
      title: "Information Sharing",
      content: `We do not sell your personal information. We may share information about you as follows:

• **With Other Users**: Your profile information is visible to verified members you're matched with.
• **With Service Providers**: We work with third-party companies to perform services on our behalf.
• **For Legal Reasons**: We may disclose information if required by law or to protect rights and safety.
• **With Your Consent**: We may share information with your explicit consent.`,
    },
    {
      title: "Data Security",
      content: `We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access. This includes:

• Encryption of data in transit and at rest
• Regular security audits and penetration testing
• Employee training on data protection practices
• Access controls limiting who can view your information`,
    },
    {
      title: "Your Rights and Choices",
      content: `You have the right to:

• **Access**: Request a copy of the personal information we hold about you.
• **Correction**: Update or correct inaccurate information in your profile.
• **Deletion**: Request deletion of your account and associated data.
• **Portability**: Receive your data in a structured, commonly used format.
• **Opt-out**: Unsubscribe from marketing communications at any time.`,
    },
    {
      title: "Data Retention",
      content: `We retain your information for as long as your account is active or as needed to provide you services. We may also retain certain information as required by law or for legitimate business purposes, such as resolving disputes and enforcing our agreements.`,
    },
    {
      title: "International Transfers",
      content: `Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers in compliance with applicable data protection laws.`,
    },
    {
      title: "Changes to This Policy",
      content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically.`,
    },
    {
      title: "Contact Us",
      content: `If you have any questions about this Privacy Policy or our data practices, please contact us at:

**Email**: privacy@entangl.com
**Address**: 123 Market Street, Suite 500, San Francisco, CA 94105`,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-1/4 w-72 h-72 bg-coral/10 rounded-full blur-3xl animate-pulse-soft" />
          </div>

          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 rounded-2xl gradient-bg mx-auto mb-6 flex items-center justify-center shadow-lg">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-slide-up">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground animate-slide-up">
                Last Updated: January 1, 2026
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="pb-16 lg:pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground mb-8">
                  At Entangl, we take your privacy seriously. This Privacy Policy explains how we collect, 
                  use, disclose, and safeguard your information when you use our platform.
                </p>

                {sections.map((section, index) => (
                  <div key={section.title} className="mb-10">
                    <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-primary-foreground text-sm font-bold shadow-sm">
                        {index + 1}
                      </span>
                      {section.title}
                    </h2>
                    <div className="text-muted-foreground whitespace-pre-line pl-11">
                      {section.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
