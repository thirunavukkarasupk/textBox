import { React } from 'react';
const TextBox = ({ state, actions }) =>
	<div>
		<label>
			<input
				type="text"
				value={ state.input }
				onChange={ (evt) =>
					actions.setInput(evt.target.value) }
			/>

		</label>
		<button
			onClick={ () => actions.getText() }
		>
			save!
		</button>
	</div>;

export default TextBox;
