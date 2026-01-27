import { FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsConditions = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: `By accessing or using the Entangl platform, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access the service.

These Terms and Conditions apply to all users, including without limitation users who are browsers, vendors, customers, merchants, and contributors of content.`,
    },
    {
      title: "Eligibility",
      content: `To use Entangl, you must:

• Be at least 18 years of age
• Have a valid corporate email address for verification
• Provide accurate and complete registration information
• Not be prohibited from using the service under applicable law

We reserve the right to refuse service, terminate accounts, or remove content in our sole discretion.`,
    },
    {
      title: "Account Registration",
      content: `When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of these Terms.

You are responsible for:

• Safeguarding your password and access credentials
• All activities that occur under your account
• Notifying us immediately of any unauthorized use`,
    },
    {
      title: "Acceptable Use",
      content: `You agree not to use Entangl to:

• Violate any applicable laws or regulations
• Infringe upon the rights of others
• Harass, abuse, or harm another person
• Send spam or other unsolicited communications
• Impersonate another person or misrepresent your affiliation
• Interfere with the proper working of the platform
• Collect user data without consent
• Use the service for commercial solicitation without permission`,
    },
    {
      title: "User Content",
      content: `You retain ownership of content you submit to Entangl. By posting content, you grant us a non-exclusive, worldwide, royalty-free license to use, display, and distribute your content in connection with providing the service.

You represent that:

• You own or have the right to share the content
• The content does not violate any third-party rights
• The content is accurate and not misleading`,
    },
    {
      title: "Matching and Connections",
      content: `Entangl provides a platform for professional networking. We do not guarantee:

• The accuracy of information provided by other users
• The success of any matches or connections
• The behavior or reliability of other users
• Specific outcomes from using the platform

You acknowledge that all interactions with other users are at your own risk.`,
    },
    {
      title: "Subscription and Payments",
      content: `Some features of Entangl may require a paid subscription. By subscribing, you agree to:

• Pay all applicable fees and charges
• Provide accurate billing information
• Authorize recurring charges until cancellation
• Cancellation policies as described at the time of purchase

Refunds are handled in accordance with our refund policy.`,
    },
    {
      title: "Intellectual Property",
      content: `The Entangl platform, including its design, features, content, and code, is protected by intellectual property laws. You may not:

• Copy, modify, or distribute our content without permission
• Use our trademarks without written consent
• Reverse engineer or attempt to extract source code
• Create derivative works based on our platform`,
    },
    {
      title: "Disclaimer of Warranties",
      content: `Entangl is provided "as is" and "as available" without warranties of any kind. We disclaim all warranties, express or implied, including:

• Merchantability and fitness for a particular purpose
• Non-infringement of third-party rights
• Accuracy, reliability, or completeness of content
• Uninterrupted or error-free operation`,
    },
    {
      title: "Limitation of Liability",
      content: `To the maximum extent permitted by law, Entangl shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from:

• Your use or inability to use the service
• Any unauthorized access to your data
• Conduct or content of any third party
• Any other matter relating to the service`,
    },
    {
      title: "Changes to Terms",
      content: `We reserve the right to modify these Terms at any time. We will notify users of material changes by posting the updated terms and updating the "Last Updated" date. Continued use after changes constitutes acceptance of the new terms.`,
    },
    {
      title: "Governing Law",
      content: `These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of San Francisco County, California.`,
    },
    {
      title: "Contact Information",
      content: `For questions about these Terms and Conditions, please contact us at:

**Email**: legal@entangl.com
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
            <div className="absolute top-20 right-1/4 w-72 h-72 bg-coral/10 rounded-full blur-3xl animate-pulse-soft" />
          </div>

          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 rounded-2xl gradient-bg mx-auto mb-6 flex items-center justify-center shadow-lg">
                <FileText className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-slide-up">
                Terms & Conditions
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
                  Please read these Terms and Conditions carefully before using the Entangl platform. 
                  These terms govern your access to and use of our services.
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

export default TermsConditions;
