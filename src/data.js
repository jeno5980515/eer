const Nodes = [
	{
		id : 'table1',
		fields : [
			{
				name : 'col1'
			},
			{
				name : 'col2'
			}
		]
	},
	{
		id : 'table2',
		fields : [
			{
				name : 'col1'
			},
			{
				name : 'col2'
			}
		]
	}
]

const Links = [
	{
		n1 : {
			table : 'table1',
			field : 'col1'
		},
		n2 : {
			table : 'table2',
			field : 'col2'
		}
	}
]

export default {
	nodes : Nodes,
	links : Links
}