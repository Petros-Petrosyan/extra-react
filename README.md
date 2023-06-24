# Extra React

Extra React is a component library for React.js that aims to make developers' lives easier by providing two components: List and ConditionalRender.

## Install

```js
npm install extra-react
```

## Components

### List

The List component is designed to render a list of items based on the provided data array.

#### Props

| Name          | Description                                                                                                                                                     | Is Required |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| data          | An array of data.                                                                                                                                               | true        |
| renderItem    | A React component that defines how each item in the list should be rendered.                                                                                    | true        |
| uniqueKeyProp | A string representing the unique key property in the data array. If the data objects have a unique property like an ID, it is recommended to provide this prop. | false       |

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

### ConditionalRender

The ConditionalRender component allows you to conditionally render content based on a given condition.

#### Props

| Name              | Description                                                                           | Is Required |
| ----------------- | ------------------------------------------------------------------------------------- | ----------- |
| children          | The React children element to be rendered.                                            | true        |
| condition         | A boolean value determining whether to render the children or the fallback component. | true        |
| fallbackComponent | A React component to be rendered if the condition is false..                          | false       |

#### Examples

```jsx
// Simple Example

import { ConditionalRender } from "extra-react";

const App = () => {
  return (
    <ConditionalRender condition={false}>
      <p>If the condition is true, render me. Otherwise, render nothing.</p>
    </ConditionalRender>
  );
};

export default App;
```

```jsx
// Advanced Example

import { ConditionalRender } from "extra-react";

const Fallback = () => {
  return (
    <ConditionalRender
      condition={false}
      fallbackComponent={() => (
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
    </ConditionalRender>
  );
};

const App = () => {
  return (
    <ConditionalRender condition={false} fallbackComponent={Fallback}>
      <p>The condition is true in the App component.</p>
    </ConditionalRender>
  );
};

export default App;
```

## Contributing

Contributions to Extra React are welcome! If you find any issues or want to suggest improvements, please open an issue or submit a pull request on the [GitHub repository](https://github.com/Petros-Petrosyan/extra-react).

## License

[MIT](https://github.com/Petros-Petrosyan/extra-react/blob/main/LICENSE)

## Authors

[Petros Petrosyan](https://github.com/Petros-Petrosyan)
