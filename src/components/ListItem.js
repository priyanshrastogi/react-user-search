import React from 'react';
import PropTypes from 'prop-types';

export default function ListItem(props) {
  
  const renderText = (attr, className, suffix) => {
    if(attr === 'items' && props.match.foundIn === 'items') {
      return (
        <span>
          <span className={className}>Found <span className={'highlight-text'}>{props.match.searchTerm}</span> in items: {props.match.item}</span>
        </span>
      )
    }
    else if(attr === props.match.foundIn) {
      return (
        <span>
          <span className={className}>{props[attr].substring(0, props.match.start)}</span>
          <span className={className+' highlight-text'}>{props[attr].substring(props.match.start, props.match.end)}</span>
          <span className={className}>{props[attr].substring(props.match.end, props[attr].length)}</span>{suffix}
        </span>
      );
    }
    else {
      return (
        <span>
          <span className={className}>{props[attr]}</span>{suffix}
        </span>
      );
    }
  }

  const renderCardContent = () => {
    return (
      <p>
       {renderText('id', 'item-id', <br/>)}
       {renderText('name', 'item-name', <br/>)}
       {renderText('address', 'item-address', ' - ')}
       {renderText('pincode', 'item-address', <br/>)}
       {props.match.foundIn === 'items' ? renderText('items', 'item-items-match', false) : ``}
      </p>
    )
  }
  
  return (
    <div
      id={`card-item-index-${props.index}`} 
      className={props.selectedIndex === props.index ? 'card-item-hover' : 'card-item'}
      onMouseEnter={(e) => props.onMouseEnterHandler(props.index)}
      onMouseLeave={(e) => props.onMouseLeaveHandler(props.index)}>
      {renderCardContent()}
    </div>
  )
}

ListItem.propTypes = {
  onMouseEnterHandler: PropTypes.func,
  onMouseLeaveHandler: PropTypes.func,
  selectedIndex: PropTypes.number,
  index: PropTypes.number
}