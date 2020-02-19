import { View as GraphicsView } from 'expo-graphics';
import ExpoTHREE, { THREE } from 'expo-three';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class App extends React.Component {
  componentWillMount() {
    THREE.suppressExpoWarnings();
  }

  render() {
    // Create an `ExpoGraphics.View` covering the whole screen, tell it to call our
    // `onContextCreate` function once it's initialized.
    return (
        <View style={styles.container}>
            <View style={styles.topNavigation}>
                <Text style={styles.topText}>3D Playground</Text> 
                <View style={styles.topNavigationCurve} />
            </View>
            <GraphicsView
                onContextCreate={this.onContextCreate}
                onRender={this.onRender}
            />
        </View>
    );
  }

  // This is called by the `ExpoGraphics.View` once it's initialized
  onContextCreate = async ({
    gl,
    width,
    height,
    scale: pixelRatio,
  }) => {
    this.renderer = new ExpoTHREE.Renderer({ gl, pixelRatio, width, height });
    this.renderer.setClearColor(0x14144b);
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);
    this.camera.position.z = 5;
    this.camera.position.y = 3;
    const geometry = new THREE.BoxGeometry(1, 1, 1);

    const material = new THREE.MeshPhongMaterial({
      color: 0x888888,

    });
    
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);

    this.scene.add(new THREE.AmbientLight(0x404040));

    const light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(3, 3, 3);
    this.scene.add(light);
  };

  onRender = delta => {
    this.cube.rotation.y += 2 * delta;
    this.renderer.render(this.scene, this.camera);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topNavigation: { 
    paddingTop: 30,
    backgroundColor: 'black',
  },
  topNavigationCurve: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'rgba(20, 20, 75, 1.0)',
    minHeight: 30,
  },
  topText: {
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 20,
    fontSize: 20,
    color: 'white'
  }
})