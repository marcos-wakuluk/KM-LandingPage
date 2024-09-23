import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Section6 = () => {
  return (
    <div className="flex bg-custom-black justify-center items-center py-12">
      <div className="w-full max-w-3xl p-8 rounded-lg bg-custom-gray shadow-lg">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Encuentra todo acá:</h2>
        <div className="flex justify-center">
          <ul className="text-white space-y-6">
            <li className="flex items-center text-lg">
              <CheckCircleIcon className="h-6 w-6 text-green-500 mr-4" />
              <span>Entrenamiento y nutrición</span>
            </li>
            <li className="flex items-center text-lg">
              <CheckCircleIcon className="h-6 w-6 text-green-500 mr-4" />
              <span>Videos y alternativas</span>
            </li>
            <li className="flex items-center text-lg">
              <CheckCircleIcon className="h-6 w-6 text-green-500 mr-4" />
              <span>Seguimiento y soporte</span>
            </li>
            <li className="flex items-center text-lg">
              <CheckCircleIcon className="h-6 w-6 text-green-500 mr-4" />
              <span>Comunidad fitness</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section6;
