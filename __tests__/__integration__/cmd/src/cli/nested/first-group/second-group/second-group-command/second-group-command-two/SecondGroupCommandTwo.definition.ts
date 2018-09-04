/*
* This program and the accompanying materials are made available under the terms of the *
* Eclipse Public License v2.0 which accompanies this distribution, and is available at *
* https://www.eclipse.org/legal/epl-v20.html                                      *
*                                                                                 *
* SPDX-License-Identifier: EPL-2.0                                                *
*                                                                                 *
* Copyright Contributors to the Zowe Project.                                     *
*                                                                                 *
*/

import { ICommandDefinition } from "../../../../../../../../../../packages/index";

export const SecondGroupCommandTwoDefinition: ICommandDefinition = {
    name: "second-group-command-two",
    aliases: ["sgct"],
    description: "A command in the second group",
    type: "command",
    handler: __dirname + "/SecondGroupCommandTwo.handler"
};
