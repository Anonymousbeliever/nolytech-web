import { Link } from 'react-router-dom'
import {
  Cookie,
  Database,
  Eye,
  FileClock,
  FilePenLine,
  Globe2,
  Handshake,
  LockKeyhole,
  Mail,
  Scale,
  ShieldCheck,
  UserCheck,
  Users,
} from 'lucide-react'
import LegalDocument from '../components/common/LegalDocument.jsx'

const sections = [
  {
    id: 'introduction',
    number: '01',
    title: 'Introduction',
    icon: ShieldCheck,
    content: [
      {
        value:
          'Nolytech Limited ("Nolytech", "we", "us", or "our") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services. Please read this policy carefully. By accessing or using our services, you agree to the practices described herein.',
      },
    ],
  },
  {
    id: 'information-we-collect',
    number: '02',
    title: 'Information We Collect',
    icon: Database,
    content: [
      { value: 'We may collect the following categories of personal information:' },
      {
        type: 'list',
        items: [
          <><strong>Identity & Contact Data:</strong> Name, email address, phone number, company name, and physical address.</>,
          <><strong>Technical Data:</strong> IP address, browser type, operating system, referring URLs, and pages visited.</>,
          <><strong>Usage Data:</strong> Information about how you use our website and services.</>,
          <><strong>Communications:</strong> Any messages, inquiries, or feedback you send us.</>,
        ],
      },
    ],
  },
  {
    id: 'how-we-use-information',
    number: '03',
    title: 'How We Use Your Information',
    icon: Eye,
    content: [
      { value: 'We use the information we collect to:' },
      {
        type: 'list',
        items: [
          'Provide, operate, and improve our services.',
          'Respond to your inquiries and support requests.',
          'Send service-related communications and updates.',
          'Send marketing communications (where you have opted in).',
          'Comply with legal obligations and enforce our agreements.',
          'Detect and prevent fraud or unauthorized access.',
        ],
      },
    ],
  },
  {
    id: 'legal-basis',
    number: '04',
    title: 'Legal Basis for Processing',
    icon: Scale,
    content: [
      { value: 'We process your personal data under the following legal bases:' },
      {
        type: 'list',
        items: [
          <><strong>Contractual necessity:</strong> To fulfil a contract with you or take steps before entering into one.</>,
          <><strong>Legitimate interests:</strong> For business operations, security, and fraud prevention.</>,
          <><strong>Consent:</strong> Where you have given explicit consent (e.g., marketing emails).</>,
          <><strong>Legal obligation:</strong> Where required by applicable law.</>,
        ],
      },
    ],
  },
  {
    id: 'sharing-information',
    number: '05',
    title: 'Sharing of Information',
    icon: Handshake,
    content: [
      { value: 'We do not sell or rent your personal information. We may share it with:' },
      {
        type: 'list',
        items: [
          'Service providers who assist us in operating our business (hosting, analytics, payment processing).',
          'Professional advisers (lawyers, accountants) bound by confidentiality obligations.',
          'Regulatory authorities or law enforcement when required by law.',
          'A successor entity in the event of a merger, acquisition, or sale of assets.',
        ],
      },
    ],
  },
  {
    id: 'data-retention',
    number: '06',
    title: 'Data Retention',
    icon: FileClock,
    content: [
      {
        value:
          'We retain your personal data for as long as necessary to fulfil the purposes outlined in this policy, or as required by law. When data is no longer needed, it is securely deleted or anonymised.',
      },
    ],
  },
  {
    id: 'data-security',
    number: '07',
    title: 'Data Security',
    icon: LockKeyhole,
    content: [
      {
        value:
          'We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, loss, or disclosure. However, no transmission over the internet is completely secure, and we cannot guarantee absolute security.',
      },
    ],
  },
  {
    id: 'your-rights',
    number: '08',
    title: 'Your Rights',
    icon: UserCheck,
    content: [
      { value: 'Depending on applicable law, you may have the right to:' },
      {
        type: 'list',
        items: [
          'Access the personal data we hold about you.',
          'Request correction of inaccurate or incomplete data.',
          <><Link to="/delete-account">Submit a deletion request</Link> to have your personal data removed.</>,
          'Object to or restrict our processing of your data.',
          'Data portability — receive your data in a structured, machine-readable format.',
          'Withdraw consent at any time (where processing is based on consent).',
        ],
      },
      {
        value: (
          <>
            To exercise any of these rights, please contact us at{' '}
            <a href="mailto:info@nolytech.co.ke">info@nolytech.co.ke</a>.
          </>
        ),
      },
    ],
  },
  {
    id: 'cookies',
    number: '09',
    title: 'Cookies',
    icon: Cookie,
    content: [
      {
        value:
          'Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyse site traffic. You can control cookie settings through your browser. Continued use of our site after adjusting settings constitutes acceptance of our cookie practices.',
      },
    ],
  },
  {
    id: 'third-party-links',
    number: '10',
    title: 'Third-Party Links',
    icon: Globe2,
    content: [
      {
        value:
          'Our website may contain links to third-party sites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.',
      },
    ],
  },
  {
    id: 'childrens-privacy',
    number: '11',
    title: "Children's Privacy",
    icon: Users,
    content: [
      {
        value:
          'Our services are not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately.',
      },
    ],
  },
  {
    id: 'policy-changes',
    number: '12',
    title: 'Changes to This Policy',
    icon: FilePenLine,
    content: [
      {
        value:
          'We may update this Privacy Policy from time to time. The "Last updated" date at the top of this page reflects the most recent revision. Continued use of our services after changes are posted constitutes your acceptance of the updated policy.',
      },
    ],
  },
  {
    id: 'contact-us',
    number: '13',
    title: 'Contact Us',
    icon: Mail,
    content: [
      { value: 'If you have any questions about this Privacy Policy or our data practices, please contact us:' },
      {
        type: 'list',
        items: [
          <><strong>Email:</strong> <a href="mailto:info@nolytech.co.ke">info@nolytech.co.ke</a></>,
          <><strong>Phone:</strong> <a href="tel:+254795112229">+254 795 112 229</a></>,
          <><strong>Address:</strong> Mogadishu Estate, behind Premier Hospital, Nyali Links Road, Mombasa, Kenya</>,
        ],
      },
    ],
  },
]

export default function PrivacyPolicy() {
  return (
    <LegalDocument
      title="Privacy Policy"
      kicker="Data protection"
      summary="How Nolytech collects, uses, protects, and manages personal information when people use our website or engage our services."
      lastUpdated="June 5, 2026"
      highlights={[
        { label: 'Scope', value: 'Website and services' },
        { label: 'Data rights', value: 'Access, correction, deletion' },
        { label: 'Primary contact', value: 'info@nolytech.co.ke' },
      ]}
      sections={sections}
      relatedLink={{ to: '/terms-of-service', label: 'Read our Terms of Service' }}
    />
  )
}
