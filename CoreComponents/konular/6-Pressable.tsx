import { View, Text, Image,
    ImageBackground, ScrollView ,Button
   , Pressable} from "react-native";
 const logoImg = require("./assets/adaptive-icon.png")
 
 export default function App() {
   return (
     <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
       <Button title="Press" onPress={()=>console.log("Button pressed")}
       color="midnightblue"/>
 
       <Pressable onPress={()=>console.log("Image pressed")}>
       <Image source={logoImg} style={{ width: 300, height: 300 }} />
       </Pressable>
       <Pressable onPress={()=>console.log("Image text")}>
       <Text>
         
 
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper eros lectus, ac mollis mauris molestie ut. Aliquam commodo justo suscipit, varius nunc nec, aliquam nisi. Duis nec viverra nisi. Fusce dui ipsum, dictum vitae tristique sit amet, tempus nec est. Nullam lacinia ac dui sed ultrices. Pellentesque porta, eros nec faucibus blandit, risus massa aliquam turpis, non scelerisque arcu lacus vitae leo. Nunc eu dictum justo.
 
         Quisque cursus orci quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum posuere mi nulla, et venenatis massa tempor ac. Praesent vel quam eget dui ultrices mattis non nec leo. In et bibendum dui. Morbi ultrices vel est eu accumsan. Aenean luctus lectus sit amet nulla malesuada posuere. Suspendisse nec iaculis metus. Morbi ullamcorper scelerisque elit rutrum elementum. Praesent pharetra cursus urna, a maximus eros tincidunt id. Duis convallis enim diam, viverra fermentum sem scelerisque ac.
 
         Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ornare lacus ut odio accumsan hendrerit. Donec vulputate justo in nunc euismod, sed condimentum quam facilisis. Sed luctus volutpat mauris a placerat. Nunc ut erat ac massa imperdiet facilisis. Maecenas facilisis egestas enim, maximus dictum elit blandit id. Curabitur ultricies augue scelerisque, faucibus sapien a, efficitur massa. Aliquam gravida pellentesque massa, eget efficitur urna placerat eget. Fusce consequat porta quam, sit amet porta turpis mattis in. Duis elementum velit nisi, eget ornare est iaculis vel. Sed ut eros quis eros eleifend viverra. Morbi et lorem quis arcu euismod pellentesque. Duis venenatis, metus nec sodales tincidunt, velit dolor auctor neque, ac tempor lorem velit quis erat. Mauris semper consequat feugiat. Suspendisse ut ullamcorper magna. Pellentesque quis eros ultricies, pretium eros vitae, rhoncus tortor.
 
         Fusce eu augue laoreet est malesuada imperdiet non vitae diam. Mauris a lectus nec urna sagittis dignissim at eget turpis. Suspendisse eleifend feugiat leo id pulvinar. Phasellus varius ornare lorem, eget scelerisque lacus interdum nec. Praesent imperdiet vel dui in pretium. Ut id neque non ex efficitur interdum. Donec blandit ut justo a fermentum. Proin eros justo, rhoncus quis risus vitae, tempor imperdiet sem. Vivamus suscipit, elit vitae viverra consequat, odio nibh consequat mi, et sagittis eros elit eu leo. Aliquam quis venenatis purus. Mauris vehicula posuere nisi in fringilla. Phasellus facilisis sit amet leo eget porta. Aliquam porttitor augue diam, at egestas lorem eleifend vel. Pellentesque eget vestibulum sem.
 
         Etiam congue ex eu est consequat cursus. Pellentesque lorem nibh, hendrerit a auctor et, vehicula ut felis. Curabitur ultricies dictum leo semper posuere. Nunc id massa ac arcu imperdiet suscipit sed quis elit. Sed sapien massa, hendrerit vel lorem a, finibus aliquet justo. Morbi ac nibh sed est laoreet imperdiet eu nec metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed egestas mi id semper varius. Phasellus id orci ut neque porttitor mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
       </Text>
       </Pressable>
       <Image source={logoImg} style={{ width: 300, height: 300 }} />
 
     </View>
   )
 
 }
 
 /*
 Pressable
 
 onPress : tıklandığında
 onLongPress : uzun tıklandığında - 500ms
 onPressOut : tıklama bittiğinde
 onPressLongOut : uzun basma hareketi bittiğinde
 
 */