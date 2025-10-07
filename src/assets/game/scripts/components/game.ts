import Observer from "observer";

import { _decorator } from "cc";
import { PortraitCascadingSlotGame } from "db://shared-cascading-slot/portrait-cascading-slot-game";
import { startGame } from "db://shared-components/shared/scripts/startup";
import { siteConfigs } from "../../../scripts/site-configs";
import { containerOptions } from "../containerOptions";
import { settings } from "../game-settings";
import "./../../../resources/i18n";

startGame(settings.name, containerOptions, siteConfigs, settings.tolgeeNamespaces);

const { ccclass, property } = _decorator;
const { observer, render, handle } = Observer;

@ccclass
@observer(settings.name)
export default class Game extends PortraitCascadingSlotGame {
    namespace = settings.name;
}
