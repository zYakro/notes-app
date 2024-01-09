import { ExpandAnimation } from "../../components/Animations/ExpandAnimation";
import { TabBarContainer, TabBarMenu, TabContainer, TabItem } from "./styled";
import { TabIcons } from "../TabIcons";

export const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <TabBarContainer>
      <ExpandAnimation duration={250} delay={250}>
        <TabBarMenu>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                  ? options.title
                  : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            return (
              <TabContainer
                key={route.key}
                accessibilityRole="button"
                accessibilityStates={isFocused ? ['selected'] : []}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                isFocused={isFocused}
              >
                <TabItem
                  isFocused={isFocused}
                >
                  <TabIcons routeName={route.name} isFocused={isFocused} />
                </TabItem>
              </TabContainer>
            );
          })}
        </TabBarMenu>
      </ExpandAnimation>
    </TabBarContainer>
  );
}
