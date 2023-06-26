# Extra React

Extra React is a component library for React.js that aims to make developers' lives easier by providing two components: List and Conditional.

## Install

```js
npm install extra-react
```

## Components

### List

The List component is designed to render a list of items based on the provided data array.
The List component takes care of assigning unique keys to each item in the provided data array, so you don't have to worry about it every time you use the List component.

#### Props

| Name          | Description                                                                                                                                                       | Is Required |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| data          | An array of data.                                                                                                                                                 | true        |
| renderItem    | A React component that defines how each item in the list should be rendered.                                                                                      | true        |
| uniqueKeyProp | A string representing the unique key property in the data array. If the data objects have a unique property like an "id", it is recommended to provide this prop. | false       |

#### Examples

```jsx
// Example without using uniqueKeyProp

import { List } from "extra-react";

const data = ["Title 1", "Title 2", "Title 3"];

const Item = ({ data }) => {
  return <p>{data}</p>;
};

const App = () => {
  return <List data={data} renderItem={Item} />;
};

export default App;
```

```jsx
// Example using uniqueKeyProp

import { List } from "extra-react";

const data = [
  { id: 1, title: "Title 1" },
  { id: 2, title: "Title 2" },
  { id: 3, title: "Title 3" },
];

const Item = ({ data }) => {
  return <p>{data.title}</p>;
};

const App = () => {
  return <List data={data} renderItem={Item} uniqueKeyProp="id" />;
};

export default App;
```

### Conditional

The Conditional component allows you to conditionally render content based on a given condition.

#### Props

| Name      | Description                                                                           | Is Required |
| --------- | ------------------------------------------------------------------------------------- | ----------- |
| children  | The React children element to be rendered.                                            | true        |
| condition | A boolean value determining whether to render the children or the fallback component. | true        |
| fallback  | A React component to be rendered if the condition is false.                           | false       |

#### Examples

```jsx
// Simple Example

import { Conditional } from "extra-react";

const App = () => {
  return (
    <Conditional condition={false}>
      <p>If the condition is true, render me. Otherwise, render nothing.</p>
    </Conditional>
  );
};

export default App;
```

```jsx
// Advanced Example

import { Conditional } from "extra-react";

const Fallback = () => {
  return (
    <Conditional
      condition={false}
      fallback={() => (
        <p>
          The condition is false in both the App component and the Fallback
          component.
        </p>
      )}
    >
      <p>
        The condition is false in the App component but true in the Fallback
        component.
      </p>
    </Conditional>
  );
};

const App = () => {
  return (
    <Conditional condition={false} fallback={Fallback}>
      <p>The condition is true in the App component.</p>
    </Conditional>
  );
};

export default App;
```

## Contributing

Contributions to Extra React are welcome! If you find any issues or want to suggest improvements, please open an issue or submit a pull request on the [repository](https://github.com/Petros-Petrosyan/extra-react).

## License

[MIT](https://github.com/Petros-Petrosyan/extra-react/blob/main/LICENSE)

## Authors

[Petros Petrosyan](https://github.com/Petros-Petrosyan)
