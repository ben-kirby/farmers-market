import React from 'react'
import PropTypes from 'prop-types'


function ProduceList(props){
  return (
    <div>
      <p>{props.name}</p>
    </div>
  )
}

ProduceList.propTypes = {
  name: PropTypes.string
}

export default ProduceList
