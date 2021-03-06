/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface OcVolumeControls {
    'colors': [number, number, number][];
    'colorsX': number[];
    'histograms': number[];
    'opacities': number[];
    'opacitiesX': number[];
    'range': [number, number];
  }
  interface OcVolumeControlsAttributes extends StencilHTMLAttributes {
    'colors'?: [number, number, number][];
    'colorsX'?: number[];
    'histograms'?: number[];
    'onOpacitiesChanged'?: (event: CustomEvent) => void;
    'opacities'?: number[];
    'opacitiesX'?: number[];
    'range'?: [number, number];
  }
}

declare global {
  interface StencilElementInterfaces {
    'OcVolumeControls': Components.OcVolumeControls;
  }

  interface StencilIntrinsicElements {
    'oc-volume-controls': Components.OcVolumeControlsAttributes;
  }


  interface HTMLOcVolumeControlsElement extends Components.OcVolumeControls, HTMLStencilElement {}
  var HTMLOcVolumeControlsElement: {
    prototype: HTMLOcVolumeControlsElement;
    new (): HTMLOcVolumeControlsElement;
  };

  interface HTMLElementTagNameMap {
    'oc-volume-controls': HTMLOcVolumeControlsElement
  }

  interface ElementTagNameMap {
    'oc-volume-controls': HTMLOcVolumeControlsElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
