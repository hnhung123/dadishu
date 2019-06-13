
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class GameUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":25,"x":25,"skin":"ui/back.png"}},{"type":"Box","props":{"y":195,"x":154,"name":"item0"},"child":[{"type":"Image","props":{"y":83,"skin":"ui/mask-01.png"}},{"type":"Image","props":{"y":16,"x":4,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}}]},{"type":"Box","props":{"y":193,"x":344,"name":"item1"},"child":[{"type":"Image","props":{"y":83,"skin":"ui/mask-02.png"}},{"type":"Image","props":{"y":16,"x":4,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}}]},{"type":"Box","props":{"y":199,"x":543,"name":"item2"},"child":[{"type":"Image","props":{"y":83,"skin":"ui/mask-03.png"}},{"type":"Image","props":{"y":16,"x":4,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}}]},{"type":"Box","props":{"y":286,"x":127,"name":"item3"},"child":[{"type":"Image","props":{"y":83,"skin":"ui/mask-04.png"}},{"type":"Image","props":{"y":16,"x":4,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}}]},{"type":"Box","props":{"y":288,"x":344,"name":"item4"},"child":[{"type":"Image","props":{"y":83,"skin":"ui/mask-05.png"}},{"type":"Image","props":{"y":16,"x":4,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}}]},{"type":"Box","props":{"y":286,"x":544,"name":"item5"},"child":[{"type":"Image","props":{"y":83,"skin":"ui/mask-06.png"}},{"type":"Image","props":{"y":16,"x":4,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}}]},{"type":"Box","props":{"y":391,"x":115,"name":"item6"},"child":[{"type":"Image","props":{"y":83,"skin":"ui/mask-07.png"}},{"type":"Image","props":{"y":16,"x":4,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}}]},{"type":"Box","props":{"y":390,"x":346,"name":"item7"},"child":[{"type":"Image","props":{"y":83,"skin":"ui/mask-08.png"}},{"type":"Image","props":{"y":16,"x":4,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}}]},{"type":"Box","props":{"y":390,"x":567,"name":"item8"},"child":[{"type":"Image","props":{"y":83,"skin":"ui/mask-09.png"}},{"type":"Image","props":{"y":16,"x":4,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameUI.uiView);

        }

    }
}
