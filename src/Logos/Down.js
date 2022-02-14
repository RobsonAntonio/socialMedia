import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"

const Down = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <Path fill="#DC414C" fillRule="evenodd" d="m0 0 4 4 4-4z" />
  </Svg>
)

const Memo = memo(Down)
export default Memo
