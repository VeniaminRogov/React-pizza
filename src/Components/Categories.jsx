import { React, useState } from 'react';

/* class Categories extends React.Component {
  state = {
    activeItem: 3,
  };

  onSelectItem = (index) => {
    this.setState({
      activeItem: index,
    });
    this.forceUpdate();
  };

  render() {
    const { items, onClickItem } = this.props;

    return (
      <div className="categories">
        <ul>
          <li>Все</li>
          {items.map((item, index) => (
            <li className={this.state.activeItem === index ? 'active' : ''} onClick={() => this.onSelectItem(index)} key={`${index}_${item}`}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
} */

function Categories({ items }) {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>
          Все
        </li>
        {items &&
          items.map((item, index) => (
            <li className={activeItem === index ? 'active' : ''} onClick={() => onSelectItem(index)} key={`${index}_${item}`}>
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Categories;
