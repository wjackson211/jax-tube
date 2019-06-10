import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//import * as EqualizerActions from '../../actions/equalizer';
import Knob from '../../components/knob';
//import EqualizerPresetList from '../../components/EqualizerPresetList';

import styles from './styles.scss';

const PreampContainer = ({  }) => (
  <div className={styles.equalizer_view}>
    <h1>Gain</h1>
    <Knob
            numTicks={75}
            degrees={270}
            min={1}
            max={100}
            value={0}
            size={80}
            //onChange={this.handleChange}
          />
          <h1>Output</h1>
    <Knob
            numTicks={75}
            degrees={270}
            min={1}
            max={100}
            value={0}
            size={80}
            //onChange={this.handleChange}
          />
  </div>
);

// function mapStateToProps({ equalizer }) {
//   return {
//     selected: equalizer.selected,
//     equalizer: equalizer.presets[equalizer.selected],
//     presets: Object.keys(equalizer.presets),
//     viz: equalizer.viz,
//     dataViz: equalizer.dataViz
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(EqualizerActions, dispatch)
//   };
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(EqualizerViewContainer);

export default PreampContainer;