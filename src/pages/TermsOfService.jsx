import { Link } from 'react-router-dom'
import {
  BadgeCheck,
  Banknote,
  Ban,
  BriefcaseBusiness,
  ClipboardCheck,
  FileCheck2,
  FileText,
  Handshake,
  KeyRound,
  Mail,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Split,
} from 'lucide-react'
import LegalDocument from '../components/common/LegalDocument.jsx'

const sections = [
  {
    id: 'acceptance',
    number: '01',
    title: 'Acceptance of Terms',
    icon: BadgeCheck,
    content: [
      {
        value:
          'By accessing or using the website and services of Nolytech Limited ("Nolytech", "we", "us", or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services. We reserve the right to update these Terms at any time; continued use of our services after any changes constitutes your acceptance.',
      },
    ],
  },
  {
    id: 'services',
    number: '02',
    title: 'Description of Services',
    icon: BriefcaseBusiness,
    content: [
      {
        value:
          'Nolytech Limited provides professional ICT solutions including, but not limited to, custom software development, ERP and enterprise systems consulting, AI automation, chatbot and WhatsApp integrations, mobile applications, websites and client portals, database and data management, cloud and infrastructure management, networking and connectivity, and digital transformation consultancy. Specific service details, deliverables, timelines, and fees are governed by individual service agreements or statements of work entered into between Nolytech and the client.',
      },
    ],
  },
  {
    id: 'eligibility',
    number: '03',
    title: 'Eligibility',
    icon: ClipboardCheck,
    content: [
      {
        value:
          'You must be at least 18 years old and legally capable of entering into binding contracts to use our services. By using our services, you represent and warrant that you meet these requirements.',
      },
    ],
  },
  {
    id: 'user-responsibilities',
    number: '04',
    title: 'User Responsibilities',
    icon: ShieldCheck,
    content: [
      { value: 'You agree to:' },
      {
        type: 'list',
        items: [
          'Provide accurate, current, and complete information when engaging with Nolytech.',
          'Use our services only for lawful purposes and in compliance with applicable laws and regulations.',
          'Not attempt to gain unauthorised access to any system, network, or data.',
          'Not use our services to transmit harmful, offensive, or illegal content.',
          'Maintain the confidentiality of any account credentials or access details we provide.',
        ],
      },
    ],
  },
  {
    id: 'intellectual-property',
    number: '05',
    title: 'Intellectual Property',
    icon: KeyRound,
    content: [
      {
        value:
          'All content on this website — including text, graphics, logos, images, and software — is the property of Nolytech Limited or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.',
      },
      {
        value:
          'Where Nolytech develops custom software or systems for a client, ownership of deliverables is governed by the applicable service agreement. Unless otherwise agreed in writing, Nolytech retains ownership of all tools, frameworks, and pre-existing intellectual property used in the development.',
      },
    ],
  },
  {
    id: 'confidentiality',
    number: '06',
    title: 'Confidentiality',
    icon: Handshake,
    content: [
      {
        value:
          'Both parties agree to keep confidential any proprietary or sensitive information exchanged during the provision of services. This obligation survives the termination of any agreement between the parties.',
      },
    ],
  },
  {
    id: 'payment-terms',
    number: '07',
    title: 'Payment Terms',
    icon: Banknote,
    content: [
      { value: 'Fees for services are as agreed in the applicable service agreement or invoice. Unless otherwise stated:' },
      {
        type: 'list',
        items: [
          'Invoices are due within 30 days of the invoice date.',
          'Late payments may attract interest at the statutory rate.',
          'Nolytech reserves the right to suspend services for overdue accounts.',
        ],
      },
    ],
  },
  {
    id: 'liability',
    number: '08',
    title: 'Limitation of Liability',
    icon: ShieldAlert,
    content: [
      {
        value:
          'To the maximum extent permitted by applicable law, Nolytech Limited shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of — or inability to use — our services, even if we have been advised of the possibility of such damages. Our total liability to you for any claim arising under these Terms shall not exceed the amount you paid to us in the three (3) months preceding the claim.',
      },
    ],
  },
  {
    id: 'warranties',
    number: '09',
    title: 'Disclaimer of Warranties',
    icon: Ban,
    content: [
      {
        value:
          'Our services are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that our services will be uninterrupted, error-free, or free of viruses or other harmful components.',
      },
    ],
  },
  {
    id: 'termination',
    number: '10',
    title: 'Termination',
    icon: FileCheck2,
    content: [
      {
        value:
          'Either party may terminate a service engagement as specified in the applicable service agreement. Nolytech reserves the right to immediately suspend or terminate access to our services if you breach these Terms or engage in conduct that we reasonably believe is harmful to us, other users, or third parties.',
      },
    ],
  },
  {
    id: 'governing-law',
    number: '11',
    title: 'Governing Law and Dispute Resolution',
    icon: Scale,
    content: [
      {
        value:
          'These Terms are governed by and construed in accordance with the laws of the Republic of Kenya. Any disputes arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the courts of Kenya. Where possible, the parties agree to attempt to resolve disputes amicably through good-faith negotiation before initiating formal proceedings.',
      },
    ],
  },
  {
    id: 'privacy',
    number: '12',
    title: 'Privacy',
    icon: FileText,
    content: [
      {
        value: (
          <>
            Your use of our services is also subject to our{' '}
            <Link to="/privacy-policy">Privacy Policy</Link>, which is incorporated into these Terms by reference.
          </>
        ),
      },
    ],
  },
  {
    id: 'severability',
    number: '13',
    title: 'Severability',
    icon: Split,
    content: [
      {
        value:
          'If any provision of these Terms is found to be unenforceable or invalid, the remaining provisions shall continue in full force and effect.',
      },
    ],
  },
  {
    id: 'contact-us',
    number: '14',
    title: 'Contact Us',
    icon: Mail,
    content: [
      { value: 'For questions or concerns about these Terms, please contact us:' },
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

export default function TermsOfService() {
  return (
    <LegalDocument
      title="Terms of Service"
      kicker="Service agreement"
      summary="The terms that govern access to Nolytech's website, professional ICT services, client engagements, and related communications."
      lastUpdated="June 5, 2026"
      highlights={[
        { label: 'Applies to', value: 'Website and services' },
        { label: 'Governing law', value: 'Republic of Kenya' },
        { label: 'Service scope', value: 'Defined per agreement' },
      ]}
      sections={sections}
      relatedLink={{ to: '/privacy-policy', label: 'Read our Privacy Policy' }}
    />
  )
}
