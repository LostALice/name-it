// Code by AkinoAlice@TyrantRey

import React, { useState } from "react";
import { callLLMApi } from "@/app/api/callLLM";

export function QuestionInput() {
    const [isLanguageOpen, setIsLanguageOpen] = useState<boolean>(false);
    const [selectedProgrammingLanguageOption, setSelectedProgrammingLanguageOption] = useState<string>("Language");
    const [isNameTypeOpen, setIsNameTypeOpen] = useState<boolean>(false);
    const [selectedNameTypeOption, setSelectedNameTypeOption] = useState<string>("Function");

    const [inputValue, setInputValue] = useState<string>("");
    const [wordCount, setWordCount] = useState<number>(0);
    const [suggestedName, setSuggestedName] = useState<string>("")

    const programmingLanguage = [
        "Python",
        "JavaScript",
        "C++",
        "C",
        "Java",
        "Go Lang",
        "Rust",
        "Swift",
        "Kotlin",
        "Ruby",
        "Clojure",
    ];

    const nameType = [
        "Function",
        "Class",
        "Method",
        "Variable",
        "Constructor",
        "Interface",
        "Enum",
        "Package",
        "Module",
        "Struct",
        "Union",
        "Trait",
        "Type Alias",
        "Constant",
        "Property",
        "Function Signature",
        "Type Definition",
        "Type Annotation",
        "Type Cast",
        "Type Parameter",
        "Type Constraint",
        "Type Family",
        "Type Operator",
        "Type Projection",
        "Type Quantifier",
        "Type Refinement",
        "Type Variable",
        "Existential Type",
        "Phantom Type",
        "Placeholder Type",
        "Opaque Type",
        "Tuple Type",
        "Function Type",
        "Constructor Type",
        "Inference Variable",
        "Label",
        "Pattern",
        "Recursive Pattern",
        "Tuple Pattern",
        "Unit Pattern",
        "Value Pattern",
    ]

    const countWords = (text: string): number => {
        return text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        const words = countWords(text);

        if (words <= 30) {
            setInputValue(text);
            setWordCount(words);
        }
    };

    return (
        <div className="min-h-screen flex">
            <div className="flex flex-col items-center w-full mt-[40vh] gap-16">
                <div className="flex items-center space-x-2">
                    <span className="text-lg font-medium">Name a</span>

                    <div className="relative">
                        <button
                            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                            className="flex items-center justify-between w-48 px-4 py-2  border border-gray-300 rounded-md shadow-sm hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <span>{selectedProgrammingLanguageOption}</span>
                            <span className="text-gray-400 ml-2">▼</span>
                        </button>

                        {isLanguageOpen && (
                            <div className="absolute z-10 w-full mt-1  border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                                <ul className="py-1">
                                    {programmingLanguage.map((option) => (
                                        <li
                                            key={option}
                                            onClick={() => {
                                                setSelectedProgrammingLanguageOption(option);
                                                setIsLanguageOpen(false);
                                            }}
                                            className="px-4 py-2 hover:opacity-75 cursor-pointer"
                                        >
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    <span className="text-lg font-medium">&apos;s</span>

                    <div className="relative">
                        <button
                            onClick={() => setIsNameTypeOpen(!isNameTypeOpen)}
                            className="flex items-center justify-between w-48 px-4 py-2  border border-gray-300 rounded-md shadow-sm hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <span>{selectedNameTypeOption}</span>
                            <span className="text-gray-400 ml-2">▼</span>
                        </button>

                        {isNameTypeOpen && (
                            <div className="absolute z-10 w-full mt-1 border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                                <ul className="py-1">
                                    {nameType.map((option) => (
                                        <li
                                            key={option}
                                            onClick={() => {
                                                setSelectedNameTypeOption(option);
                                                setIsNameTypeOpen(false);
                                            }}
                                            className="px-4 py-2 hover:opacity-7 cursor-pointer"
                                        >
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <span className="text-lg font-medium">that</span>

                    <div className="relative">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Description"
                        />
                        <div className="absolute right-2 top-3 text-sm text-gray-400">
                            {wordCount}/30
                        </div>
                    </div>
                    <button
                        onClick={async () => {
                            setSuggestedName(await callLLMApi(selectedProgrammingLanguageOption, selectedNameTypeOption, inputValue))
                        }}
                        className="px-4 py-2 rounded-md text-white font-medium shadow-sm
                                bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Submit
                    </button>
                </div>
                {suggestedName !== "" ?
                    (<div className="flex flex-row space-y-4 p-4 ">
                        <div className="flex flex-col">
                            <span className="text-xl font-semibold my-1">Suggested {selectedNameTypeOption} Name:</span>
                            <pre className="w-full bg-gray-800 text-white rounded-lg p-4">
                                <code className="block text-lg font-mono">{suggestedName}</code>
                            </pre>
                        </div>
                    </div>) : (<></>)
                }
            </div>
        </div>
    );
}
