
import '@vue/runtime-core'

export { }

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Card: typeof import('./src/components/card/index.vue')['default']
    ElButton: typeof import('element-plus/es')['ElButton']
    ElCard: typeof import('element-plus/es')['ElCard']
    ElCol: typeof import('element-plus/es')['ElCol']
    ElConfigProvider: typeof import('element-plus/es')['ElConfigProvider']
    ElDatePicker: typeof import('element-plus/es')['ElDatePicker']
    ElDialog: typeof import('element-plus/es')['ElDialog']
    ElDropdown: typeof import('element-plus/es')['ElDropdown']
    ElDropdownItem: typeof import('element-plus/es')['ElDropdownItem']
    ElDropdownMenu: typeof import('element-plus/es')['ElDropdownMenu']
    ElForm: typeof import('element-plus/es')['ElForm']
    ElFormItem: typeof import('element-plus/es')['ElFormItem']
    ElIcon: typeof import('element-plus/es')['ElIcon']
    ElInput: typeof import('element-plus/es')['ElInput']
    ElMenu: typeof import('element-plus/es')['ElMenu']
    ElMenuItem: typeof import('element-plus/es')['ElMenuItem']
    ElMenuItemGroup: typeof import('element-plus/es')['ElMenuItemGroup']
    ElSubMenu: typeof import('element-plus/es')['ElSubMenu']
    ElTimeline: typeof import('element-plus/es')['ElTimeline']
    ElTimelineItem: typeof import('element-plus/es')['ElTimelineItem']
    ElUpload: typeof import('element-plus/es')['ElUpload']
    Header: typeof import('./src/components/header/index.vue')['default']
    Layout: typeof import('./src/components/layout/index.vue')['default']
    Menu: typeof import('./src/components/menu/index.vue')['default']
    Nav: typeof import('./src/components/nav/index.vue')['default']
    RouterLink: typeof import('vue-router')['RouterLink']
    RouterView: typeof import('vue-router')['RouterView']
    Tag: typeof import('./src/components/tag/index.vue')['default']
    VueQuillEditor: typeof import('./src/components/vue-quill-editor/index.vue')['default']
  }
}
