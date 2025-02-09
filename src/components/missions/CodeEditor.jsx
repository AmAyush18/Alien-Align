const CodeEditor = ({ propertiesToTry, validOptions, onPropertyChange, currentValues }) => {
  return (
    <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
      <div className="text-gray-300">
        {`.alien-container {`}
        <div className="ml-4 space-y-2">
          <div className="text-gray-300">display: flex;</div>
          {propertiesToTry.map(prop => (
            <div key={prop} className="flex items-center space-x-2 my-1">
              <span className="text-purple-400 w-32">{prop}:</span>
              <select
                value={currentValues[prop] || ''}
                onChange={(e) => onPropertyChange(prop, e.target.value)}
                className="bg-gray-800 text-gray-100 px-2 py-1 rounded w-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select value...</option>
                {validOptions[prop].map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <span className="text-gray-300">;</span>
            </div>
          ))}
        </div>
        {'}'}
      </div>
    </div>
  );
};

export default CodeEditor