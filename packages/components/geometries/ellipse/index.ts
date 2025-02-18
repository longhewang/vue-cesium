/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-03-30 11:36:15
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\geometries\ellipse\index.ts
 */
import { VcComponentInternalInstance, VcComponentPublicInstance, VcPosition, VcReadyObject } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue'
import { useGeometries } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import {
  center,
  semiMajorAxis,
  semiMinorAxis,
  ellipsoid,
  height,
  extrudedHeight,
  rotation,
  stRotation,
  granularity,
  vertexFormat
} from '@vue-cesium/utils/cesium-props'
import { commonEmits } from '@vue-cesium/utils/emits'
export const ellipseGeometryProps = {
  ...center,
  ...semiMajorAxis,
  ...semiMinorAxis,
  ...ellipsoid,
  ...height,
  ...extrudedHeight,
  ...rotation,
  ...stRotation,
  ...granularity,
  ...vertexFormat
}
export default defineComponent({
  name: 'VcGeometryEllipse',
  props: ellipseGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'EllipseGeometry'
    useGeometries(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export type VcGeometryEllipseProps = {
  /**
   * The ellipse's center point in the fixed frame.
   */
  center: VcPosition
  /**
   * The length of the ellipse's semi-major axis in meters.
   */
  semiMajorAxis: number
  /**
   * The length of the ellipse's semi-minor axis in meters.
   */
  semiMinorAxis: number
  /**
   * The ellipsoid the ellipse will be on.
   */
  ellipsoid?: Cesium.Ellipsoid
  /**
   * The distance in meters between the ellipse and the ellipsoid surface.
   */
  height?: number
  /**
   * The distance in meters between the ellipse's extruded face and the ellipsoid surface.
   */
  extrudedHeight?: number
  /**
   * The angle of rotation counter-clockwise from north.
   * Default value: 0.0
   */
  rotation?: number
  /**
   * The rotation of the texture coordinates counter-clockwise from north.
   * Default value: 0.0
   */
  stRotation?: number
  /**
   * The angular distance between points on the ellipse in radians.
   */
  granularity?: number
  /**
   * The vertex attributes to be computed.
   */
  vertexFormat?: Cesium.VertexFormat
  /**
   * Triggers before the VcGeometryEllipse is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcGeometryEllipse is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcGeometryEllipse is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
}

export type VcGeometryEllipseRef = VcComponentPublicInstance<VcGeometryEllipseProps>
