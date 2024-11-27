import React, { useState } from 'react';
import { ScrollText, ChevronDown, ChevronUp } from 'lucide-react';

interface Section {
  title: string;
  content: string;
}

function App() {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const sections: Section[] = [
    {
      title: "1. 規約への同意",
      content: "このコミュニティサイトにアクセスし、使用することにより、お客様は本契約の条件および規定に同意したものとみなされます。これらの条件に従うことに同意しない場合は、このコミュニティサイトを使用しないでください。"
    },
    {
      title: "2. Use License",
      content: "Permission is granted to temporarily download one copy of the materials (information or software) on this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose; attempt to decompile or reverse engineer any software contained on the website; remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or 'mirror' the materials on any other server."
    },
    {
      title: "3. Disclaimer",
      content: "The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."
    },
    {
      title: "4. Limitations",
      content: "In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if we or an authorized representative has been notified orally or in writing of the possibility of such damage."
    },
    {
      title: "5. Revisions and Errata",
      content: "The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our website are accurate, complete, or current. We may make changes to the materials contained on our website at any time without notice."
    },
    {
      title: "6. Links",
      content: "We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user's own risk."
    },
    {
      title: "7. Governing Law",
      content: "These terms and conditions are governed by and construed in accordance with applicable laws, and you irrevocably submit to the exclusive jurisdiction of the courts in that location."
    }
  ];

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <ScrollText className="h-8 w-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">利用規約</h1>
          </div>
          <p className="mt-2 text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Introduction */}
          <div className="p-6 border-b border-gray-200">
            <p className="text-gray-700 leading-relaxed">
              埼玉県さいたま市中央区コミュニティへようこそ！ このコミュニティへの参加と利用には、以下の利用規約を遵守し、同意したことになります。
s            </p>
          </div>

          {/* Accordion Sections */}
          <div className="divide-y divide-gray-200">
            {sections.map((section, index) => (
              <div key={index} className="cursor-pointer">
                <div
                  className="px-6 py-4 hover:bg-gray-50 transition-colors duration-150 ease-in-out"
                  onClick={() => toggleSection(index)}
                >
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold text-gray-900">{section.title}</h2>
                    {expandedSection === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                  {expandedSection === index && (
                    <p className="mt-4 text-gray-700 leading-relaxed">
                      {section.content}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="p-6 bg-gray-50">
            <p className="text-sm text-gray-600">
              By using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use. If you have any questions about these terms, please contact us.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;