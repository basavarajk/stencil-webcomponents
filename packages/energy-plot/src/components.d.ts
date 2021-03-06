/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';


import {
  IEnergy,
} from './interfaces';


export namespace Components {

  interface OcEnergyPlot {
    'energies': IEnergy[];
  }
  interface OcEnergyPlotAttributes extends StencilHTMLAttributes {
    'energies'?: IEnergy[];
    'onPointSelected'?: (event: CustomEvent) => void;
  }
}

declare global {
  interface StencilElementInterfaces {
    'OcEnergyPlot': Components.OcEnergyPlot;
  }

  interface StencilIntrinsicElements {
    'oc-energy-plot': Components.OcEnergyPlotAttributes;
  }


  interface HTMLOcEnergyPlotElement extends Components.OcEnergyPlot, HTMLStencilElement {}
  var HTMLOcEnergyPlotElement: {
    prototype: HTMLOcEnergyPlotElement;
    new (): HTMLOcEnergyPlotElement;
  };

  interface HTMLElementTagNameMap {
    'oc-energy-plot': HTMLOcEnergyPlotElement
  }

  interface ElementTagNameMap {
    'oc-energy-plot': HTMLOcEnergyPlotElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
