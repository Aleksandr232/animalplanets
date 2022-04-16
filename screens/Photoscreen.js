import React, { useRef, useState, useEffect } from "react";
import { Text, View, Dimensions, Platform, StyleSheet, ImageBackground } from 'react-native';
import Carousel, { ParallaxImage } from "react-native-snap-carousel";

const ENTRIES1 = [
  {
    illustration:
      "https://natworld.info/wp-content/uploads/2017/05/%D0%B6%D0%B8%D0%B2%D0%BE%D1%82%D0%BD%D1%8B%D0%B9-%D0%BC%D0%B8%D1%80.jpg",
  },
  {
    illustration:
      "https://bel.cultreg.ru/uploads/d1783da5d649ef5e34b4139d1b10c832_w570_h380_cx21_cy0_cw578_ch396.jpg",
  },
  {
    illustration:
      "https://bugaga.ru/uploads/posts/2019-02/1549647616_zhiv10.jpg",
  },
  {
    illustration:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-6_Wx6lX1p3r26ziDNv3Pb0cB-x7ouyFLkA&usqp=CAU",
  },
  {
    illustration:
      "https://simple-fauna.ru/wp-content/uploads/2018/10/koala.jpg",
  },
  {
    illustration:
      "https://35.img.avito.st/640x480/4479522135.jpg",
  },
  {
    illustration:
      "https://cdn.nur.kz/images/1120x630/f2510b8da22b237d.jpeg",
  },
  {
    illustration:
      "https://wl-adme.cf.tsp.li/resize/728x/jpg/0ea/150/7589f456c6bb57df14ab0acebb.jpg",
  },
  {
    illustration:
      "https://s0.rbk.ru/v6_top_pics/resized/500x312_crop/media/img/3/26/755278527973263.jpg",
  },
  {
    illustration:
      "https://i.timeout.ru/pix/resize/515/773/750x485.jpeg",
  },
];
const { width: screenWidth } = Dimensions.get("window");

const Photoscreen = (props) => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({ item, index }, parallaxProps) => {
    return (
      <View style={styles.item}>
       <ParallaxImage
          source={{ uri: item.illustration }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0}
          {...parallaxProps}
        />
      </View>
    );
  };

  const image = { uri: 'https://images.vector-images.com/clp2/277392/clp3769954.jpg' };
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <View style={styles.container}>
            <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 40}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
    </View>
    </ImageBackground>
  );
};

export default Photoscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 150,
  },
  item: {
    width: screenWidth - 40,
    height: screenWidth - 50,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: "white",
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
    
  },
  
});

const text=StyleSheet.create({
  tex:{
    fontSize: 20
  }
})