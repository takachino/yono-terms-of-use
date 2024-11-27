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
      title: "2. 使用ライセンス",
      content: "この Web サイト上の資料 (情報またはソフトウェア) のコピーを 1 部、個人的かつ非商用の一時的な閲覧のみを目的として一時的にダウンロードすることを許可します。これはライセンスの付与であり、所有権の譲渡ではありません。このライセンスでは、資料を変更またはコピーすること、資料を商用目的で使用すること、Web サイトに含まれるソフトウェアを逆コンパイルまたはリバース エンジニアリングすること、資料から著作権またはその他の所有権表示を削除すること、資料を別の人物に譲渡すること、または資料を他のサーバーに「ミラーリング」することは許可されません。"
    {
      title: "3. 免責事項",
      content: "このウェブサイトの資料は「現状のまま」提供されます。当社は、明示的または黙示的な保証を一切行わず、商品性、特定目的への適合性、知的財産権の非侵害またはその他の権利侵害の黙示的保証または条件を含むがこれらに限定されない、その他すべての保証を放棄し、否定します。"
    },
    {
      title: "4. 制限事項",
      content: "いかなる場合においても、当社または当社のサプライヤーは、当社または権限を与えられた代表者が口頭または書面でかかる損害の可能性について通知されていたとしても、当社ウェブサイト上の資料の使用または使用不能から生じるいかなる損害（データ損失または利益損失、または事業中断による損害を含むがこれに限定されない）についても責任を負わないものとします。"
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