const setInput = ({ data: input }) => ({
	input,
});
const getText = ({ state }) => ({
	text: state.input,
});

const actions = {
	setInput,
	getText,
};

export default actions;
