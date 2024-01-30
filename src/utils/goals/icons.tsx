import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export const icons = {
  barbell: (props) => <Ionicons name="barbell" {...props} />,
  clockcircle: (props) => <AntDesign name="clockcircle" {...props} />,
  apple: (props) => <FontAwesome5 name="apple-alt" {...props} />,
  running: (props) => <FontAwesome5 name="running" {...props} />,
  dog: (props) => <FontAwesome5 name="dog" {...props} />,
  bed: (props) => <FontAwesome5 name="bed" {...props} />,
  book: (props) => <FontAwesome5 name="book" {...props} />,
  flag: (props) => <MaterialIcons name="flag" {...props} />
}