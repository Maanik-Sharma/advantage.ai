import { useState } from 'react';
import { YoutubeIcon, Search, Podcast, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const templates = [
  {
    id: 1,
    title: "Youtube Video Summarizer",
    description: "Quickly extracts key points from YouTube videos, saving you time on content consumption.",
    category: "Sales",
    icon: <YoutubeIcon className="w-6 h-6 text-red-400" />,
    link: "/templates/youtube-to-blog"
  },
  {
    id: 2,
    title: "Text Summarizer",
    description: "Condenses lengthy texts into clear, concise summaries for faster reading and comprehension.",
    category: "Marketing",
    icon: <Search className="w-6 h-6 text-blue-400" />,
    link: "/summarize"
  },
  {
    id: 3,
    title: "Multiple PDF Reader Bot",
    description: "Simultaneously processes multiple PDFs, delivering insights and summaries from complex documents.",
    category: "Marketing",
    icon: <Podcast className="w-6 h-6 text-purple-400" />,
    link: ""
  },
  {
    id: 4,
    title: "SEO Blog Writer",
    description: "Generates SEO-optimized blog content to improve search visibility and drive traffic.",
    category: "Marketing",
    icon: <Twitter className="w-6 h-6 text-sky-400" />,
    link: "/blogwriter"
  },
  {
    id: 5,
    title: "Q/A Bot",
    description: "Provides accurate answers to queries, enhancing customer support and user engagement.",
    category: "Sales",
    icon: <Search className="w-6 h-6 text-blue-400" />,
    link: "/qabot"
  },
];

const CategoryPill = ({ category }) => (
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
    bg-neutral-800 text-slate-100 border border-neutral-700">
    {category}
  </span>
);

const TemplateCard = ({ template }) => {
  const cardClasses = `
    group relative bg-neutral-900 rounded-lg border border-neutral-800
    overflow-hidden transition-all duration-300 ease-in-out
    hover:shadow-lg hover:shadow-neutral-900/50 hover:scale-[1.02] 
    hover:border-neutral-700 cursor-pointer transform
  `;

  return (
    <Link to={template.link} className={cardClasses}>
      <div className="p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
            {template.icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2">
              <CategoryPill category={template.category} />
            </div>
            <h3 className="mt-2 text-lg font-medium text-slate-100 
              group-hover:text-slate-50 transition-colors duration-300">
              {template.title}
            </h3>
            <p className="mt-2 text-sm text-neutral-400 group-hover:text-neutral-300 
              transition-colors duration-300">
              {template.description}
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r 
        from-blue-500 to-purple-500 transform scale-x-0 
        group-hover:scale-x-100 transition-transform duration-300" />
    </Link>
  );
};

const TemplateGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter templates based on selected category
  const filteredTemplates = templates.filter(template => 
    selectedCategory === 'All' || template.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-100">
            Start automating with pre-built services.
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            <button 
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 rounded-full text-sm font-medium 
                transition-all duration-300 transform hover:scale-105
                ${selectedCategory === 'All' 
                  ? 'bg-slate-100 text-neutral-950 hover:bg-slate-200' 
                  : 'bg-neutral-800 text-slate-100 hover:bg-neutral-700 border border-neutral-700'
                }`}
            >
              All
            </button>
            <button 
              onClick={() => setSelectedCategory('Marketing')}
              className={`px-4 py-2 rounded-full text-sm font-medium 
                transition-all duration-300 transform hover:scale-105
                ${selectedCategory === 'Marketing' 
                  ? 'bg-slate-100 text-neutral-950 hover:bg-slate-200' 
                  : 'bg-neutral-800 text-slate-100 hover:bg-neutral-700 border border-neutral-700'
                }`}
            >
              Marketing
            </button>
            <button 
              onClick={() => setSelectedCategory('Sales')}
              className={`px-4 py-2 rounded-full text-sm font-medium 
                transition-all duration-300 transform hover:scale-105
                ${selectedCategory === 'Sales' 
                  ? 'bg-slate-100 text-neutral-950 hover:bg-slate-200' 
                  : 'bg-neutral-800 text-slate-100 hover:bg-neutral-700 border border-neutral-700'
                }`}
            >
              Sales
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredTemplates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>

        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-100 text-lg">
              No templates found for this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );  
};

export default TemplateGrid;