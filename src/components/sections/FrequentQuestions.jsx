import React, { useState } from "react";
import { ChevronDoubleUpIcon, ChevronDoubleDownIcon } from "@heroicons/react/24/solid";
import { Questions } from "../../utils/Constants";

const FrequentQuestions = () => {
  const [openQuestions, setOpenQuestions] = useState([]);

  const toggleQuestion = (index) => {
    if (openQuestions.includes(index)) {
      setOpenQuestions(openQuestions.filter((i) => i !== index));
    } else {
      setOpenQuestions([...openQuestions, index]);
    }
  };

  return (
    <div className="flex bg-custom-black justify-center items-center">
      <div className="w-full md:w-2/3 bg-black bg-opacity-50 p-8">
        <h2 className="text-2xl font-bold text-center text-white mb-8">Preguntas frecuentes:</h2>
        <div className="overflow-hidden border border-blue-500 rounded-lg">
          <table className="w-full">
            <tbody>
              {Questions.map((question, index) => (
                <tr key={index} className="border-b border-blue-500" onClick={() => toggleQuestion(index)}>
                  <td className="p-4">
                    <button className="flex items-center text-white focus:outline-none">
                      <span className="mr-2">
                        {openQuestions.includes(index) ? (
                          <ChevronDoubleUpIcon className="w-5 h-5" />
                        ) : (
                          <ChevronDoubleDownIcon className="w-5 h-5" />
                        )}
                      </span>
                      {question.question}
                    </button>
                    <div
                      className={`mt-2 text-white transition-max-height duration-700 ease-in-out overflow-hidden ${
                        openQuestions.includes(index) ? "max-h-[9999px]" : "max-h-0"
                      }`}
                    >
                      <p className="mb-2">{question.response}</p>
                      {question.onlyItems?.map((item, itemIndex) => (
                        <p key={itemIndex}>- {item}</p>
                      ))}
                      {question.items?.map((item, itemIndex) => (
                        <div key={itemIndex} className="mb-2">
                          <p>{item.title}</p>
                          {item.items?.map((subItem, subItemIndex) => (
                            <p key={subItemIndex}>- {subItem}</p>
                          ))}
                        </div>
                      ))}
                      {question.footer && <p className="mb-2">{question.footer}</p>}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FrequentQuestions;
