import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  background: ",
        ";\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n  list-style: none;\n\n  ",
        " {\n    margin-bottom: 0px;\n  }\n"
    ]);
    _templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "\n  font-size: 16px;\n  text-transform: capitalize;\n\n  &:first-child {\n    color: ",
        ";\n    font-weight: 600;\n    text-transform: uppercase;\n  }\n"
    ]);
    _templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "\n  margin-bottom: 24px;\n"
    ]);
    _templateObject3 = function _templateObject3() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        "\n  padding: 24px 0;\n  margin-bottom: 0px;\n\n  ",
        " {\n    border-top-width: 0;\n    border-bottom-width: 0;\n    padding: 0 0;\n    margin-bottom: 0;\n  }\n"
    ]);
    _templateObject4 = function _templateObject4() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        "\n  border-bottom: 0px solid ",
        ";\n"
    ]);
    _templateObject5 = function _templateObject5() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = _tagged_template_literal([
        "\n  color: ",
        ";\n"
    ]);
    _templateObject6 = function _templateObject6() {
        return data;
    };
    return data;
}
import styled from "styled-components";
import { darkColors } from "../../theme/colors";
import { Box, Flex } from "../Box";
import SocialLinks from "./Components/SocialLinks";
export var StyledFooter = styled(Flex).withConfig({
    componentId: "sc-5a1ba595-0"
})(_templateObject(), darkColors.backgroundAlt);
export var StyledList = styled.ul.withConfig({
    componentId: "sc-5a1ba595-1"
})(_templateObject1(), function(param) {
    var theme = param.theme;
    return theme.mediaQueries.md;
});
export var StyledListItem = styled.li.withConfig({
    componentId: "sc-5a1ba595-2"
})(_templateObject2(), darkColors.secondary);
export var StyledIconMobileContainer = styled(Box).withConfig({
    componentId: "sc-5a1ba595-3"
})(_templateObject3());
export var StyledToolsContainer = styled(Flex).withConfig({
    componentId: "sc-5a1ba595-4"
})(_templateObject4(), function(param) {
    var theme = param.theme;
    return theme.mediaQueries.sm;
});
export var StyledSocialLinks = styled(SocialLinks).withConfig({
    componentId: "sc-5a1ba595-5"
})(_templateObject5(), darkColors.cardBorder);
export var StyledText = styled.span.withConfig({
    componentId: "sc-5a1ba595-6"
})(_templateObject6(), darkColors.text);
