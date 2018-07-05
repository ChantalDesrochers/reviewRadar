import React, { Component } from "react";
import {Tabs, Tab} from 'material-ui/Tabs';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

// class TabsExampleControlled extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       value: 'a',
//     };
//   }

//   handleChange = (value) => {
//     this.setState({
//       value: value,
//     });
//   };

//   render() {
//     return (
//       <Tabs
//         value={this.state.value}
//         onChange={this.handleChange}
//       >
//         <Tab label="Tab A" value="a">
//           <div>
//             <h2 style={styles.headline}>Controllable Tab A</h2>
//             <p>
//               In the first tab!
//             </p>
//           </div>
//         </Tab>
//         <Tab label="Tab B" value="b">
//           <div>
//             <h2 style={styles.headline}>Controllable Tab B</h2>
//             <p>
//               In the second tab!
//             </p>
//           </div>
//         </Tab>
//       </Tabs>
//     );
//   }
// }


// export default TabsExampleControlled;

