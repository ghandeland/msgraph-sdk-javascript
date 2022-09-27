import { GraphApis } from "../lib/src/rest/graphAPIs";

import { operation4256, operation4257, operation4258, operation4259, operation4260, operation4261, operation4262, operation4263, operation4264, operation4265, operation4266, operation4267, operation4268, operation4269, operation4270, operation4271, operation4272, operation4273, operation4274, operation4275, operation4276, operation4277, operation4278, operation4279, operation4280, operation4281, operation4282, operation4283, operation4284, operation4285, operation4286, operation4287, operation4288, operation4289, operation4290, operation4291, operation4292, operation4293, operation4294, operation4295, operation4296, operation4297, operation4298, operation4299, operation4300, operation4301, operation4302, operation4303, operation4304, operation4305, operation4306, operation4307, operation4308, operation4309, operation4310, operation4311, operation4312, operation4313, operation4314, operation4315, operation4316, operation4317, operation4318, operation4319, operation4320, operation4321, operation4322, operation4323, operation4324, operation4325, operation4326, operation4327, operation4328, operation4329, operation4330, operation4331, operation4332, operation4333, operation4334, operation4335, operation4336, operation4337, operation4338, operation4339, operation4394, operation4395, operation4396, operation4397, operation4398, operation4399, operation4400, operation4401, operation4402, operation4403, operation4404, operation4405, operation4406, operation4407, operation4408, operation4409, operation4410, operation4411, operation4412, operation4413, operation4414, operation4415, operation4416, operation4417, operation4418, operation4419, operation4420, operation7269, operation7270, operation7271, operation7272, operation7273, operation7274, operation7275, operation7276, operation7277, operation7278, operation7279, operation7280, operation7281, operation7282, operation7283, operation7284, operation7285, operation7286, operation7287, operation7288, operation7289, operation7290, operation7291, operation7292, operation7293, operation7294, operation7295, operation7296, operation7297, operation7298, operation7299, operation7300, operation7301, operation7302, operation7303, operation7304, operation7305, operation7306, operation7307, operation7308, operation7309, operation7310, operation7311, operation7312, operation7313, operation7314, operation7315, operation7316, operation7317, operation7318, operation7319, operation7320, operation7321, operation7322, operation7323, operation7324, operation7325, operation7326, operation7327, operation7328, operation7329, operation7330, operation7331, operation7332, operation7333, operation7334, operation7335, operation7336, operation7337, operation7338, operation7339, operation7340, operation7341, operation7342, operation7343, operation7344, operation7345, operation7346, operation7347, operation7348, operation7349, operation7350, operation7351, operation7352, operation7407, operation7408, operation7409, operation7410, operation7411, operation7412, operation7413, operation7414, operation7415, operation7416, operation7417, operation7418, operation7419, operation7420, operation7421, operation7422, operation7423, operation7424, operation7425, operation7426, operation7427, operation7428, operation7429, operation7430, operation7431, operation7432, operation7433 } from "../lib/src/rest/operations";

declare module "../lib/src/rest/graphAPIs" {
    export interface GraphApis {
        (api:"/me/mailFolders"):operation4256,
        (api:"/me/mailFolders/{mailFolder-id}",mailFolderid: string):operation4257,
        (api:"/me/mailFolders/{mailFolder-id}/childFolders",mailFolderid: string):operation4258,
        (api:"/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}",mailFolderid: string,mailFolderid1: string):operation4259,
        (api:"/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules",mailFolderid: string,mailFolderid1: string):operation4260,
        (api:"/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}",mailFolderid: string,mailFolderid1: string,messageRuleid: string):operation4261,
        (api:"/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/$count",mailFolderid: string,mailFolderid1: string):operation4262,
        (api:"/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages",mailFolderid: string,mailFolderid1: string):operation4263,
        (api:"/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}",mailFolderid: string,mailFolderid1: string,messageid: string):operation4264,
        (api:"/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/$value",mailFolderid: string,mailFolderid1: string,messageid: string):operation4265,
        (api:"/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/attachments",mailFolderid: string,mailFolderid1: string,messageid: string):operation4266,
        (api:"/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/attachments/{attachment-id}",mailFolderid: string,mailFolderid1: string,messageid: string,attachmentid: string):operation4267,
        (api:"/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/attachments/$count",mailFolderid: string,mailFolderid1: string,messageid: string):operation4268,
        (api:"/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/attachments/microsoft.graph.createUploadSession",mailFolderid: string,mailFolderid1: string,messageid: string):operation4269,
        (api:"/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/extensions",mailFolderid: string,mailFolderid1: string,messageid: string):operation4270,
        (api:"/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/extensions/{extension-id}",mailFolderid: string,mailFolderid1: string,messageid: string,extensionid: string):operation4271,
        (api:"/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/extensions/$count",mailFolderid: string,mailFolderid1: string,messageid: string):operation4272,
        (api:"/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/microsoft.graph.copy",mailFolderid: string,mailFolderid1: string,messageid: string):operation4273,
        (api:"/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/microsoft.graph.createForward",mailFolderid: string,mailFolderid1: string,messageid: string):operation4274,
        (api:"/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/microsoft.graph.createReply",mailFolderid: string,mailFolderid1: string,messageid: string):operation4275,
        (api:"/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/microsoft.graph.createReplyAll",mailFolderid: string,mailFolderid1: string,messageid: string):operation4276,
        (api:"/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/microsoft.graph.forward",mailFolderid: string,mailFolderid1: string,messageid: string):operation4277,
        (api:"/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/microsoft.graph.move",mailFolderid: string,mailFolderid1: string,messageid: string):operation4278,
        (api:"/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/microsoft.graph.reply",mailFolderid: string,mailFolderid1: string,messageid: string):operation4279,
        (api:"/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/microsoft.graph.replyAll",mailFolderid: string,mailFolderid1: string,messageid: string):operation4280,
        (api:"/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/microsoft.graph.send",mailFolderid: string,mailFolderid1: string,messageid: string):operation4281,
        (api:"/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/multiValueExtendedProperties",mailFolderid: string,mailFolderid1: string,messageid: string):operation4282,
        (api:"/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",mailFolderid: string,mailFolderid1: string,messageid: string,multiValueLegacyExtendedPropertyid: string):operation4283,
        (api:"/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/multiValueExtendedProperties/$count",mailFolderid: string,mailFolderid1: string,messageid: string):operation4284,
        (api:"/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/singleValueExtendedProperties",mailFolderid: string,mailFolderid1: string,messageid: string):operation4285,
        (api:"/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",mailFolderid: string,mailFolderid1: string,messageid: string,singleValueLegacyExtendedPropertyid: string):operation4286,
        (api:"/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/singleValueExtendedProperties/$count",mailFolderid: string,mailFolderid1: string,messageid: string):operation4287,
        (api:"/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/$count",mailFolderid: string,mailFolderid1: string):operation4288,
        (api:"/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/microsoft.graph.delta()",mailFolderid: string,mailFolderid1: string):operation4289,
        (api:"/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/microsoft.graph.copy",mailFolderid: string,mailFolderid1: string):operation4290,
        (api:"/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/microsoft.graph.move",mailFolderid: string,mailFolderid1: string):operation4291,
        (api:"/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/multiValueExtendedProperties",mailFolderid: string,mailFolderid1: string):operation4292,
        (api:"/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",mailFolderid: string,mailFolderid1: string,multiValueLegacyExtendedPropertyid: string):operation4293,
        (api:"/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/multiValueExtendedProperties/$count",mailFolderid: string,mailFolderid1: string):operation4294,
        (api:"/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/singleValueExtendedProperties",mailFolderid: string,mailFolderid1: string):operation4295,
        (api:"/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",mailFolderid: string,mailFolderid1: string,singleValueLegacyExtendedPropertyid: string):operation4296,
        (api:"/me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/singleValueExtendedProperties/$count",mailFolderid: string,mailFolderid1: string):operation4297,
        (api:"/me/mailFolders/{mailFolder-id}/childFolders/$count",mailFolderid: string):operation4298,
        (api:"/me/mailFolders/{mailFolder-id}/childFolders/microsoft.graph.delta()",mailFolderid: string):operation4299,
        (api:"/me/mailFolders/{mailFolder-id}/messageRules",mailFolderid: string):operation4300,
        (api:"/me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}",mailFolderid: string,messageRuleid: string):operation4301,
        (api:"/me/mailFolders/{mailFolder-id}/messageRules/$count",mailFolderid: string):operation4302,
        (api:"/me/mailFolders/{mailFolder-id}/messages",mailFolderid: string):operation4303,
        (api:"/me/mailFolders/{mailFolder-id}/messages/{message-id}",mailFolderid: string,messageid: string):operation4304,
        (api:"/me/mailFolders/{mailFolder-id}/messages/{message-id}/$value",mailFolderid: string,messageid: string):operation4305,
        (api:"/me/mailFolders/{mailFolder-id}/messages/{message-id}/attachments",mailFolderid: string,messageid: string):operation4306,
        (api:"/me/mailFolders/{mailFolder-id}/messages/{message-id}/attachments/{attachment-id}",mailFolderid: string,messageid: string,attachmentid: string):operation4307,
        (api:"/me/mailFolders/{mailFolder-id}/messages/{message-id}/attachments/$count",mailFolderid: string,messageid: string):operation4308,
        (api:"/me/mailFolders/{mailFolder-id}/messages/{message-id}/attachments/microsoft.graph.createUploadSession",mailFolderid: string,messageid: string):operation4309,
        (api:"/me/mailFolders/{mailFolder-id}/messages/{message-id}/extensions",mailFolderid: string,messageid: string):operation4310,
        (api:"/me/mailFolders/{mailFolder-id}/messages/{message-id}/extensions/{extension-id}",mailFolderid: string,messageid: string,extensionid: string):operation4311,
        (api:"/me/mailFolders/{mailFolder-id}/messages/{message-id}/extensions/$count",mailFolderid: string,messageid: string):operation4312,
        (api:"/me/mailFolders/{mailFolder-id}/messages/{message-id}/microsoft.graph.copy",mailFolderid: string,messageid: string):operation4313,
        (api:"/me/mailFolders/{mailFolder-id}/messages/{message-id}/microsoft.graph.createForward",mailFolderid: string,messageid: string):operation4314,
        (api:"/me/mailFolders/{mailFolder-id}/messages/{message-id}/microsoft.graph.createReply",mailFolderid: string,messageid: string):operation4315,
        (api:"/me/mailFolders/{mailFolder-id}/messages/{message-id}/microsoft.graph.createReplyAll",mailFolderid: string,messageid: string):operation4316,
        (api:"/me/mailFolders/{mailFolder-id}/messages/{message-id}/microsoft.graph.forward",mailFolderid: string,messageid: string):operation4317,
        (api:"/me/mailFolders/{mailFolder-id}/messages/{message-id}/microsoft.graph.move",mailFolderid: string,messageid: string):operation4318,
        (api:"/me/mailFolders/{mailFolder-id}/messages/{message-id}/microsoft.graph.reply",mailFolderid: string,messageid: string):operation4319,
        (api:"/me/mailFolders/{mailFolder-id}/messages/{message-id}/microsoft.graph.replyAll",mailFolderid: string,messageid: string):operation4320,
        (api:"/me/mailFolders/{mailFolder-id}/messages/{message-id}/microsoft.graph.send",mailFolderid: string,messageid: string):operation4321,
        (api:"/me/mailFolders/{mailFolder-id}/messages/{message-id}/multiValueExtendedProperties",mailFolderid: string,messageid: string):operation4322,
        (api:"/me/mailFolders/{mailFolder-id}/messages/{message-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",mailFolderid: string,messageid: string,multiValueLegacyExtendedPropertyid: string):operation4323,
        (api:"/me/mailFolders/{mailFolder-id}/messages/{message-id}/multiValueExtendedProperties/$count",mailFolderid: string,messageid: string):operation4324,
        (api:"/me/mailFolders/{mailFolder-id}/messages/{message-id}/singleValueExtendedProperties",mailFolderid: string,messageid: string):operation4325,
        (api:"/me/mailFolders/{mailFolder-id}/messages/{message-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",mailFolderid: string,messageid: string,singleValueLegacyExtendedPropertyid: string):operation4326,
        (api:"/me/mailFolders/{mailFolder-id}/messages/{message-id}/singleValueExtendedProperties/$count",mailFolderid: string,messageid: string):operation4327,
        (api:"/me/mailFolders/{mailFolder-id}/messages/$count",mailFolderid: string):operation4328,
        (api:"/me/mailFolders/{mailFolder-id}/messages/microsoft.graph.delta()",mailFolderid: string):operation4329,
        (api:"/me/mailFolders/{mailFolder-id}/microsoft.graph.copy",mailFolderid: string):operation4330,
        (api:"/me/mailFolders/{mailFolder-id}/microsoft.graph.move",mailFolderid: string):operation4331,
        (api:"/me/mailFolders/{mailFolder-id}/multiValueExtendedProperties",mailFolderid: string):operation4332,
        (api:"/me/mailFolders/{mailFolder-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",mailFolderid: string,multiValueLegacyExtendedPropertyid: string):operation4333,
        (api:"/me/mailFolders/{mailFolder-id}/multiValueExtendedProperties/$count",mailFolderid: string):operation4334,
        (api:"/me/mailFolders/{mailFolder-id}/singleValueExtendedProperties",mailFolderid: string):operation4335,
        (api:"/me/mailFolders/{mailFolder-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",mailFolderid: string,singleValueLegacyExtendedPropertyid: string):operation4336,
        (api:"/me/mailFolders/{mailFolder-id}/singleValueExtendedProperties/$count",mailFolderid: string):operation4337,
        (api:"/me/mailFolders/$count"):operation4338,
        (api:"/me/mailFolders/microsoft.graph.delta()"):operation4339,

        (api:"/users/{user-id}/mailFolders",userid: string):operation7269,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}",userid: string,mailFolderid: string):operation7270,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/childFolders",userid: string,mailFolderid: string):operation7271,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}",userid: string,mailFolderid: string,mailFolderid1: string):operation7272,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules",userid: string,mailFolderid: string,mailFolderid1: string):operation7273,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}",userid: string,mailFolderid: string,mailFolderid1: string,messageRuleid: string):operation7274,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/$count",userid: string,mailFolderid: string,mailFolderid1: string):operation7275,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages",userid: string,mailFolderid: string,mailFolderid1: string):operation7276,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}",userid: string,mailFolderid: string,mailFolderid1: string,messageid: string):operation7277,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/$value",userid: string,mailFolderid: string,mailFolderid1: string,messageid: string):operation7278,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/attachments",userid: string,mailFolderid: string,mailFolderid1: string,messageid: string):operation7279,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/attachments/{attachment-id}",userid: string,mailFolderid: string,mailFolderid1: string,messageid: string,attachmentid: string):operation7280,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/attachments/$count",userid: string,mailFolderid: string,mailFolderid1: string,messageid: string):operation7281,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/attachments/microsoft.graph.createUploadSession",userid: string,mailFolderid: string,mailFolderid1: string,messageid: string):operation7282,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/extensions",userid: string,mailFolderid: string,mailFolderid1: string,messageid: string):operation7283,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/extensions/{extension-id}",userid: string,mailFolderid: string,mailFolderid1: string,messageid: string,extensionid: string):operation7284,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/extensions/$count",userid: string,mailFolderid: string,mailFolderid1: string,messageid: string):operation7285,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/microsoft.graph.copy",userid: string,mailFolderid: string,mailFolderid1: string,messageid: string):operation7286,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/microsoft.graph.createForward",userid: string,mailFolderid: string,mailFolderid1: string,messageid: string):operation7287,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/microsoft.graph.createReply",userid: string,mailFolderid: string,mailFolderid1: string,messageid: string):operation7288,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/microsoft.graph.createReplyAll",userid: string,mailFolderid: string,mailFolderid1: string,messageid: string):operation7289,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/microsoft.graph.forward",userid: string,mailFolderid: string,mailFolderid1: string,messageid: string):operation7290,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/microsoft.graph.move",userid: string,mailFolderid: string,mailFolderid1: string,messageid: string):operation7291,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/microsoft.graph.reply",userid: string,mailFolderid: string,mailFolderid1: string,messageid: string):operation7292,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/microsoft.graph.replyAll",userid: string,mailFolderid: string,mailFolderid1: string,messageid: string):operation7293,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/microsoft.graph.send",userid: string,mailFolderid: string,mailFolderid1: string,messageid: string):operation7294,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/multiValueExtendedProperties",userid: string,mailFolderid: string,mailFolderid1: string,messageid: string):operation7295,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",userid: string,mailFolderid: string,mailFolderid1: string,messageid: string,multiValueLegacyExtendedPropertyid: string):operation7296,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/multiValueExtendedProperties/$count",userid: string,mailFolderid: string,mailFolderid1: string,messageid: string):operation7297,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/singleValueExtendedProperties",userid: string,mailFolderid: string,mailFolderid1: string,messageid: string):operation7298,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",userid: string,mailFolderid: string,mailFolderid1: string,messageid: string,singleValueLegacyExtendedPropertyid: string):operation7299,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/singleValueExtendedProperties/$count",userid: string,mailFolderid: string,mailFolderid1: string,messageid: string):operation7300,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/$count",userid: string,mailFolderid: string,mailFolderid1: string):operation7301,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/microsoft.graph.delta()",userid: string,mailFolderid: string,mailFolderid1: string):operation7302,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/microsoft.graph.copy",userid: string,mailFolderid: string,mailFolderid1: string):operation7303,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/microsoft.graph.move",userid: string,mailFolderid: string,mailFolderid1: string):operation7304,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/multiValueExtendedProperties",userid: string,mailFolderid: string,mailFolderid1: string):operation7305,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",userid: string,mailFolderid: string,mailFolderid1: string,multiValueLegacyExtendedPropertyid: string):operation7306,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/multiValueExtendedProperties/$count",userid: string,mailFolderid: string,mailFolderid1: string):operation7307,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/singleValueExtendedProperties",userid: string,mailFolderid: string,mailFolderid1: string):operation7308,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",userid: string,mailFolderid: string,mailFolderid1: string,singleValueLegacyExtendedPropertyid: string):operation7309,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/singleValueExtendedProperties/$count",userid: string,mailFolderid: string,mailFolderid1: string):operation7310,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/$count",userid: string,mailFolderid: string):operation7311,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/microsoft.graph.delta()",userid: string,mailFolderid: string):operation7312,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/messageRules",userid: string,mailFolderid: string):operation7313,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}",userid: string,mailFolderid: string,messageRuleid: string):operation7314,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/messageRules/$count",userid: string,mailFolderid: string):operation7315,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/messages",userid: string,mailFolderid: string):operation7316,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}",userid: string,mailFolderid: string,messageid: string):operation7317,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/$value",userid: string,mailFolderid: string,messageid: string):operation7318,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/attachments",userid: string,mailFolderid: string,messageid: string):operation7319,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/attachments/{attachment-id}",userid: string,mailFolderid: string,messageid: string,attachmentid: string):operation7320,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/attachments/$count",userid: string,mailFolderid: string,messageid: string):operation7321,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/attachments/microsoft.graph.createUploadSession",userid: string,mailFolderid: string,messageid: string):operation7322,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/extensions",userid: string,mailFolderid: string,messageid: string):operation7323,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/extensions/{extension-id}",userid: string,mailFolderid: string,messageid: string,extensionid: string):operation7324,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/extensions/$count",userid: string,mailFolderid: string,messageid: string):operation7325,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/microsoft.graph.copy",userid: string,mailFolderid: string,messageid: string):operation7326,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/microsoft.graph.createForward",userid: string,mailFolderid: string,messageid: string):operation7327,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/microsoft.graph.createReply",userid: string,mailFolderid: string,messageid: string):operation7328,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/microsoft.graph.createReplyAll",userid: string,mailFolderid: string,messageid: string):operation7329,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/microsoft.graph.forward",userid: string,mailFolderid: string,messageid: string):operation7330,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/microsoft.graph.move",userid: string,mailFolderid: string,messageid: string):operation7331,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/microsoft.graph.reply",userid: string,mailFolderid: string,messageid: string):operation7332,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/microsoft.graph.replyAll",userid: string,mailFolderid: string,messageid: string):operation7333,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/microsoft.graph.send",userid: string,mailFolderid: string,messageid: string):operation7334,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/multiValueExtendedProperties",userid: string,mailFolderid: string,messageid: string):operation7335,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",userid: string,mailFolderid: string,messageid: string,multiValueLegacyExtendedPropertyid: string):operation7336,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/multiValueExtendedProperties/$count",userid: string,mailFolderid: string,messageid: string):operation7337,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/singleValueExtendedProperties",userid: string,mailFolderid: string,messageid: string):operation7338,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",userid: string,mailFolderid: string,messageid: string,singleValueLegacyExtendedPropertyid: string):operation7339,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/singleValueExtendedProperties/$count",userid: string,mailFolderid: string,messageid: string):operation7340,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/messages/$count",userid: string,mailFolderid: string):operation7341,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/messages/microsoft.graph.delta()",userid: string,mailFolderid: string):operation7342,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/microsoft.graph.copy",userid: string,mailFolderid: string):operation7343,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/microsoft.graph.move",userid: string,mailFolderid: string):operation7344,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/multiValueExtendedProperties",userid: string,mailFolderid: string):operation7345,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",userid: string,mailFolderid: string,multiValueLegacyExtendedPropertyid: string):operation7346,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/multiValueExtendedProperties/$count",userid: string,mailFolderid: string):operation7347,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/singleValueExtendedProperties",userid: string,mailFolderid: string):operation7348,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",userid: string,mailFolderid: string,singleValueLegacyExtendedPropertyid: string):operation7349,
    (api:"/users/{user-id}/mailFolders/{mailFolder-id}/singleValueExtendedProperties/$count",userid: string,mailFolderid: string):operation7350,
    (api:"/users/{user-id}/mailFolders/$count",userid: string):operation7351,
    (api:"/users/{user-id}/mailFolders/microsoft.graph.delta()",userid: string):operation7352,

    (api:"/users/{user-id}/messages",userid: string):operation7407,
    (api:"/users/{user-id}/messages/{message-id}",userid: string,messageid: string):operation7408,
    (api:"/users/{user-id}/messages/{message-id}/$value",userid: string,messageid: string):operation7409,
    (api:"/users/{user-id}/messages/{message-id}/attachments",userid: string,messageid: string):operation7410,
    (api:"/users/{user-id}/messages/{message-id}/attachments/{attachment-id}",userid: string,messageid: string,attachmentid: string):operation7411,
    (api:"/users/{user-id}/messages/{message-id}/attachments/$count",userid: string,messageid: string):operation7412,
    (api:"/users/{user-id}/messages/{message-id}/attachments/microsoft.graph.createUploadSession",userid: string,messageid: string):operation7413,
    (api:"/users/{user-id}/messages/{message-id}/extensions",userid: string,messageid: string):operation7414,
    (api:"/users/{user-id}/messages/{message-id}/extensions/{extension-id}",userid: string,messageid: string,extensionid: string):operation7415,
    (api:"/users/{user-id}/messages/{message-id}/extensions/$count",userid: string,messageid: string):operation7416,
    (api:"/users/{user-id}/messages/{message-id}/microsoft.graph.copy",userid: string,messageid: string):operation7417,
    (api:"/users/{user-id}/messages/{message-id}/microsoft.graph.createForward",userid: string,messageid: string):operation7418,
    (api:"/users/{user-id}/messages/{message-id}/microsoft.graph.createReply",userid: string,messageid: string):operation7419,
    (api:"/users/{user-id}/messages/{message-id}/microsoft.graph.createReplyAll",userid: string,messageid: string):operation7420,
    (api:"/users/{user-id}/messages/{message-id}/microsoft.graph.forward",userid: string,messageid: string):operation7421,
    (api:"/users/{user-id}/messages/{message-id}/microsoft.graph.move",userid: string,messageid: string):operation7422,
    (api:"/users/{user-id}/messages/{message-id}/microsoft.graph.reply",userid: string,messageid: string):operation7423,
    (api:"/users/{user-id}/messages/{message-id}/microsoft.graph.replyAll",userid: string,messageid: string):operation7424,
    (api:"/users/{user-id}/messages/{message-id}/microsoft.graph.send",userid: string,messageid: string):operation7425,
    (api:"/users/{user-id}/messages/{message-id}/multiValueExtendedProperties",userid: string,messageid: string):operation7426,
    (api:"/users/{user-id}/messages/{message-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",userid: string,messageid: string,multiValueLegacyExtendedPropertyid: string):operation7427,
    (api:"/users/{user-id}/messages/{message-id}/multiValueExtendedProperties/$count",userid: string,messageid: string):operation7428,
    (api:"/users/{user-id}/messages/{message-id}/singleValueExtendedProperties",userid: string,messageid: string):operation7429,
    (api:"/users/{user-id}/messages/{message-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",userid: string,messageid: string,singleValueLegacyExtendedPropertyid: string):operation7430,
    (api:"/users/{user-id}/messages/{message-id}/singleValueExtendedProperties/$count",userid: string,messageid: string):operation7431,
    (api:"/users/{user-id}/messages/$count",userid: string):operation7432,
    (api:"/users/{user-id}/messages/microsoft.graph.delta()",userid: string):operation7433,

    (api:"/me/messages"):operation4394,
    (api:"/me/messages/{message-id}",messageid: string):operation4395,
    (api:"/me/messages/{message-id}/$value",messageid: string):operation4396,
    (api:"/me/messages/{message-id}/attachments",messageid: string):operation4397,
    (api:"/me/messages/{message-id}/attachments/{attachment-id}",messageid: string,attachmentid: string):operation4398,
    (api:"/me/messages/{message-id}/attachments/$count",messageid: string):operation4399,
    (api:"/me/messages/{message-id}/attachments/microsoft.graph.createUploadSession",messageid: string):operation4400,
    (api:"/me/messages/{message-id}/extensions",messageid: string):operation4401,
    (api:"/me/messages/{message-id}/extensions/{extension-id}",messageid: string,extensionid: string):operation4402,
    (api:"/me/messages/{message-id}/extensions/$count",messageid: string):operation4403,
    (api:"/me/messages/{message-id}/microsoft.graph.copy",messageid: string):operation4404,
    (api:"/me/messages/{message-id}/microsoft.graph.createForward",messageid: string):operation4405,
    (api:"/me/messages/{message-id}/microsoft.graph.createReply",messageid: string):operation4406,
    (api:"/me/messages/{message-id}/microsoft.graph.createReplyAll",messageid: string):operation4407,
    (api:"/me/messages/{message-id}/microsoft.graph.forward",messageid: string):operation4408,
    (api:"/me/messages/{message-id}/microsoft.graph.move",messageid: string):operation4409,
    (api:"/me/messages/{message-id}/microsoft.graph.reply",messageid: string):operation4410,
    (api:"/me/messages/{message-id}/microsoft.graph.replyAll",messageid: string):operation4411,
    (api:"/me/messages/{message-id}/microsoft.graph.send",messageid: string):operation4412,
    (api:"/me/messages/{message-id}/multiValueExtendedProperties",messageid: string):operation4413,
    (api:"/me/messages/{message-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",messageid: string,multiValueLegacyExtendedPropertyid: string):operation4414,
    (api:"/me/messages/{message-id}/multiValueExtendedProperties/$count",messageid: string):operation4415,
    (api:"/me/messages/{message-id}/singleValueExtendedProperties",messageid: string):operation4416,
    (api:"/me/messages/{message-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",messageid: string,singleValueLegacyExtendedPropertyid: string):operation4417,
    (api:"/me/messages/{message-id}/singleValueExtendedProperties/$count",messageid: string):operation4418,
    (api:"/me/messages/$count"):operation4419,
    (api:"/me/messages/microsoft.graph.delta()"):operation4420,
    }
}

export {};