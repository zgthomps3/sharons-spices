import React from 'react'
import styles from './Panels.module.css'

class Panels extends React.Component {
  render () {
    return (
      <div className={styles.Panel}>
        <div className={styles.PanelHeading}>
          {this.props.name}
        </div>
        <div className={styles.PanelContent}>
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default Panels;