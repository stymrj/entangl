# Entangl - Professional Dating App

A modern platform connecting professionals through genuine chemistry and meaningful relationships. Find your perfect match based on skills, goals, and compatibility.

**Live Site**: Coming soon  
**GitHub**: https://github.com/stymrj/entangl

## 🎯 Features

### Core Platform
- ✨ **Professional Matching** - AI-powered chemistry-based matching algorithm
- 🔍 **Verification System** - Corporate email verification for community quality
- 💬 **Real Connections** - Direct messaging and meaningful interactions
- 📊 **Smart Profiles** - Showcase skills, goals, and professional interests

### Waitlist System
- Email subscription management
- Auto-confirmation emails via Resend
- Database storage in Supabase
- CORS-enabled edge functions

### Contact Form
- Collect inquiries and feedback
- Auto-save to database
- Email notifications (admin + auto-reply)
- Form validation and error handling

### Pages
- **Home** - Hero section with features showcase
- **About Us** - Company story and team info
- **Blog** - Professional dating insights and guides
- **Careers** - Join our team
- **Press Kit** - Brand assets and company info
- **Contact Us** - Get in touch with the team
- **Privacy Policy** - Data protection commitment
- **Terms & Conditions** - Platform guidelines
- **Unsubscribe** - Email preference management

## 🛠 Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Custom components
- **Database**: Supabase (PostgreSQL)
- **Backend**: Supabase Edge Functions (Deno)
- **Email**: Resend
- **Routing**: React Router
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Custom CSS animations

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (install with [nvm](https://github.com/nvm-sh/nvm))
- npm or yarn
- Supabase account

### Installation

```bash
# Clone the repository
git clone https://github.com/stymrj/entangl.git
cd entangl

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your Supabase credentials to .env.local

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

## 📋 Environment Variables

Create a `.env.local` file with:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

## 💾 Database Setup

### Create Tables

Run the migrations in Supabase SQL Editor:

```sql
-- Waitlist table
supabase/migrations/20240127000000_create_waitlist_table.sql

-- Contact submissions table
supabase/migrations/20240128000000_create_contact_submissions_table.sql
```

Or use the Supabase Dashboard Table Editor.

## 🔧 Edge Functions

### Deploy Functions

```bash
# Deploy waitlist signup function
supabase functions deploy waitlist-signup

# Deploy contact form function
supabase functions deploy contact-form
```

### Configure Secrets

In Supabase Dashboard → Edge Functions → Secrets:

- `RESEND_API_KEY` - Your Resend API key (for email notifications)

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm run test
```

## 📁 Project Structure

```
entangl/
├── src/
│   ├── pages/           # Page components
│   ├── components/      # Reusable components
│   │   ├── ui/         # shadcn/ui components
│   │   └── Footer.tsx
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── integrations/   # Supabase client
│   └── App.tsx         # Main app file
├── supabase/
│   ├── migrations/     # Database migrations
│   └── functions/      # Edge functions
├── public/             # Static assets
└── package.json
```

## 🌐 Available Routes

- `/` - Home page
- `/about` - About us
- `/blog` - Blog posts
- `/careers` - Job listings
- `/press` - Press kit
- `/contact` - Contact form
- `/privacy` - Privacy policy
- `/terms` - Terms & conditions
- `/unsubscribe` - Email preferences

## 📧 Email Services

### Waitlist Emails
Sent via Resend when users join the waitlist:
- Welcome email to user
- Admin notification

### Contact Form Emails
Sent via Resend when users submit contact form:
- Admin notification
- Auto-reply to user

## 🎨 Design System

- **Colors**: Coral (#FF6B6B), Purple (#8B5CF6), Pink gradients
- **Typography**: Inter font family
- **Components**: Modular shadcn/ui components
- **Animations**: Smooth transitions and fade-ins
- **Responsive**: Mobile-first approach

## 🚧 Development Workflow

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Commit: `git commit -m "Add your feature"`
4. Push: `git push origin feature/your-feature`
5. Create a Pull Request

## 📄 License

This project is private. All rights reserved.

## 👥 Team

- **Bharti Nandan** - CEO & Co-Founder
- **Anand Kumar** - CTO & Co-Founder
- **Satyam Raj** - Full Stack Developer & Co-Founder

## 📞 Contact

For inquiries, visit [entangl.com/contact](https://entangl.com/contact) or email support@entangl.in

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Components from [shadcn/ui](https://ui.shadcn.com)
- Backend by [Supabase](https://supabase.com)
- Emails with [Resend](https://resend.com)

---

Made with ❤️ for professionals.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
