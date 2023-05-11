import Item from './components/Item.js'

const TodoList = [
  {
    id: 0,
    title: "Title test 1",
    description: "Test description",
    image: "placeholder"
  },
  {
    id: 1,
    title: "Title test 2",
    description: "Test descri22ption",
    image: "placeholder"
  }
];

export function AddItem({ todoTitle, todoDescription, todoImage }) {
  const item = {
    id: 0,
    title: todoTitle,
    description: todoDescription,
    image: todoImage
  };

  TodoList.push(item);
}

export default function GetList() {
  const listItems = TodoList.map(item =>
    <Item title={item.title} description={item.description} />
  );

  return <div>{listItems}</div>;
}