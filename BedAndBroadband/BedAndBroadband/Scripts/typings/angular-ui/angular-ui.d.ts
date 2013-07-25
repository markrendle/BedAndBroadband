// Type definitions for Angular UI 0.3.0
// Project: http://angular-ui.github.io/
// Definitions by: Mark Rendle <http://github.com/markrendle>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />


///////////////////////////////////////////////////////////////////////////////
// ng.ui module
///////////////////////////////////////////////////////////////////////////////
declare module ng.ui {

    interface IDialogOptions {
        controller: string;
        template?: string;
        templateUrl?: string;
        backdrop?: bool;
        keyboard?: bool;
        backdropClick?: bool;
        dialogFade?: bool;
        backdropFade?: bool;
        resolve?: any;
    }

    interface IMessageBoxButtons {
        label: string;
        result: string;
        cssClass?: string;
    }

    interface IDialogProvider {
        dialog(opts: IDialogOptions): IDialog;
        messageBox(title: string, msg: string, btns: IMessageBoxButtons[]): IDialog;
    }

    interface IDialog {
        open(): ng.IPromise;
        close(result: any): void;
    }

    interface IStateConfig {
        template?: string;
        templateUrl?: string;
        templateProvider?: Function;
        controller?: any;
        url?: string;
        parent?: IStateConfig;
        resolve?: any;
        params?: any[];
        views?: any;
        abstract?: bool;
        onEnter?: Function;
        onExit?: Function;
        data?: any;
    }

    interface IStateProvider {
        state(name: string, config: IStateConfig): IStateProvider;
    }

    interface IState {
        params: any;
        transitionTo(state: string, params?: any, updateLocation?: bool): void;
        transitionTo(state: IStateConfig, params?: any, updateLocation?: bool): void;
        href(state: IStateConfig, params?: any): string;
        href(stateName: string, params?: any): string;
        includes(partialStateName: string): bool;
        is(stateName: string): bool;
        is(state: IStateConfig): bool;
        current: IStateConfig;
    }

    interface IStateParams {
        [key: string]: any;
    }
}
