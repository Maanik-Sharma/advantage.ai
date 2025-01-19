// import React, { useState } from 'react';
// import { summarizeText } from '../../services/summarizeService';


// const SummarizePage = () => {
//     const [input, setInput] = useState('');
//     const [summary, setSummary] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');

//     const handleSummarize = async () => {
//         if (!input.trim()) {
//             setError('Please enter some text to summarize');
//             return;
//         }

//         setLoading(true);
//         setError('');
        
//         try {
//             const result = await summarizeText(input);
//             setSummary(result);
//         } catch (err) {
//             setError(err.message || 'Failed to generate summary');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="page-container">
//             <h2>Summarize Page is working!</h2>  {/* Add this line to confirm */}
//             <div className="content p-6">
//                 <h1 className="text-2xl font-bold mb-4">Text Summarization</h1>
                
//                 {error && (
//                     <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
//                         {error}
//                     </div>
//                 )}
                
//                 <textarea
//                     value={input}
//                     onChange={(e) => setInput(e.target.value)}
//                     placeholder="Enter text to summarize..."
//                     className="w-full h-48 p-4 border rounded-lg mb-4"
//                 />
                
//                 <button
//                     onClick={handleSummarize}
//                     disabled={loading}
//                     className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-blue-300"
//                 >
//                     {loading ? 'Summarizing...' : 'Summarize'}
//                 </button>
                
//                 {summary && (
//                     <div className="mt-6">
//                         <h2 className="text-xl font-semibold mb-2">Summary</h2>
//                         <div className="p-4 bg-gray-50 rounded-lg">
//                             {summary}
//                         </div> 
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default SummarizePage;
// import React, { useState, useRef } from 'react';
// import { summarizeText } from '../../services/summarizeService';
// import { Copy, Upload } from 'lucide-react';

// const SummarizePage = () => {
//     const [input, setInput] = useState('');
//     const [summary, setSummary] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');
//     const fileInputRef = useRef(null);

//     const handleSummarize = async () => {
//         if (!input.trim()) {
//             setError('Please enter some text to summarize');
//             return;
//         }

//         setLoading(true);
//         setError('');
        
//         try {
//             const result = await summarizeText(input);
//             setSummary(result);
//         } catch (err) {
//             setError(err.message || 'Failed to generate summary');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleFileUpload = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = function(e) {
//                 setInput(e.target.result);
//             };
//             reader.onerror = function() {
//                 setError('Failed to read file');
//             };
//             reader.readAsText(file);
//         }
//     };

//     const handleCopy = async () => {
//         try {
//             await navigator.clipboard.writeText(summary);
//         } catch (err) {
//             setError('Failed to copy text');
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gray-100 p-6">
//             <div className="max-w-7xl mx-auto">
//                 <h1 className="text-3xl font-bold mb-8 text-center">Text Summarizer</h1>
                
//                 {error && (
//                     <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
//                         {error}
//                     </div>
//                 )}
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {/* Input Card */}
//                     <div className="bg-white rounded-lg shadow-lg p-6">
//                         <h2 className="text-xl font-semibold mb-4">Input Text</h2>
//                         <textarea
//                             value={input}
//                             onChange={(e) => setInput(e.target.value)}
//                             placeholder="Enter or paste text to summarize (200-100K characters)..."
//                             className="w-full h-96 p-4 border rounded-lg mb-4 resize-none"
//                         />
//                         <div className="flex justify-between">
//                             <div className="flex gap-4">
//                                 <input
//                                     type="file"
//                                     ref={fileInputRef}
//                                     onChange={handleFileUpload}
//                                     accept=".txt"
//                                     className="hidden"
//                                 />
//                                 <button
//                                     onClick={() => fileInputRef.current?.click()}
//                                     className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors flex items-center gap-2"
//                                 >
//                                     <Upload className="w-4 h-4" />
//                                     Upload File
//                                 </button>
//                                 <button
//                                     onClick={handleSummarize}
//                                     disabled={loading}
//                                     className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg disabled:bg-blue-300 transition-colors"
//                                 >
//                                     {loading ? 'Summarizing...' : 'Summarize'}
//                                 </button>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Output Card */}
//                     <div className="bg-white rounded-lg shadow-lg p-6">
//                         <div className="flex justify-between items-center mb-4">
//                             <h2 className="text-xl font-semibold">Summary</h2>
//                             {summary && (
//                                 <button
//                                     onClick={handleCopy}
//                                     className="text-gray-600 hover:text-gray-800 p-2 rounded-lg hover:bg-gray-100 transition-colors"
//                                     title="Copy to clipboard"
//                                 >
//                                     <Copy className="w-5 h-5" />
//                                 </button>
//                             )}
//                         </div>
//                         <div className="w-full h-96 p-4 border rounded-lg bg-gray-50">
//                             {summary || 'Summarized text will appear here...'}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SummarizePage;





import React, { useState, useRef } from 'react';
import { summarizeText } from '../../services/summarizeService';
import { Copy, Upload } from 'lucide-react';

const SummarizePage = () => {
    const [input, setInput] = useState('');
    const [summary, setSummary] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [showCopied, setShowCopied] = useState(false);
    const fileInputRef = useRef(null);

    const handleSummarize = async () => {
        if (!input.trim()) {
            setError('Please enter some text to summarize');
            return;
        }

        setLoading(true);
        setError('');
        
        try {
            const result = await summarizeText(input);
            setSummary(result);
        } catch (err) {
            setError(err.message || 'Failed to generate summary');
        } finally {
            setLoading(false);
        }
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                setInput(e.target.result);
            };
            reader.onerror = function() {
                setError('Failed to read file');
            };
            reader.readAsText(file);
        }
    };

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(summary);
            setShowCopied(true);
            setTimeout(() => setShowCopied(false), 1000); // Hide after 1 seconds
        } catch (err) {
            setError('Failed to copy text');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold mb-8 text-center">Text Summarizer</h1>
                
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                        {error}
                    </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Input Card */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-xl font-semibold mb-4">Input Text</h2>
                        <textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Enter or paste text to summarize (200-100K characters)..."
                            className="w-full h-96 p-4 border rounded-lg mb-4 resize-none"
                        />
                        <div className="flex justify-between">
                            <div className="flex gap-4">
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleFileUpload}
                                    accept=".txt"
                                    className="hidden"
                                />
                                <button
                                    onClick={() => fileInputRef.current?.click()}
                                    className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors flex items-center gap-2"
                                >
                                    <Upload className="w-4 h-4" />
                                    Upload File
                                </button>
                                <button
                                    onClick={handleSummarize}
                                    disabled={loading}
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg disabled:bg-blue-300 transition-colors"
                                >
                                    {loading ? 'Summarizing...' : 'Summarize'}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Output Card */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Summary</h2>
                            {summary && (
                                <div className="relative">
                                    <button
                                        onClick={handleCopy}
                                        className="text-gray-600 hover:text-gray-800 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                                    >
                                        <Copy className="w-5 h-5" />
                                    </button>
                                    {showCopied && (
                                        <div className="absolute -top-8 right-0 bg-gray-800 text-white text-sm px-2 py-1 rounded-md">
                                            Copied!
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                        <div className="w-full h-96 p-4 border rounded-lg bg-gray-50">
                            {summary || 'Summarized text will appear here...'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SummarizePage;