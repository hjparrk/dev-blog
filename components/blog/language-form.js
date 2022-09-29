const LanguageForm = (props) => {
  return (
    <select
      className="text-center text-md border-2 border-gray-300 rounded-lg"
      name="language"
      defaultValue="all"
      onChange={props.onChange}
    >
      <optgroup label="All">
        <option value="all" defaultChecked={true}>
          All
        </option>
      </optgroup>
      <optgroup label="web dev">
        <option value="JavaScript">JavaScript</option>
        <option value="React">React</option>
        <option value="Next">Next</option>
      </optgroup>
      <optgroup label="Programming">
        <option value="Python">Python</option>
        <option value="Java">Java</option>
        <option value="C">C</option>
      </optgroup>
      <optgroup label="Algorithms">
        <option value="Greedy">Greedy</option>
      </optgroup>
    </select>
  );
};

export default LanguageForm;
