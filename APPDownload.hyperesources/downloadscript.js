//显示分享的层
    function show(b) {
        if (b) {
            $("#weixin-tip").show();
        }
        else {
            $("#weixin-tip").hide();
        }
    }
    //判断是不是微信浏览器
    function isWeiXin() {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true;
        } else {
            return false;
        }
    }

    $(function () {
        //点击按钮处理的事情
		var loginType = 'fc';
		var reg1 = new RegExp("(^|&)" + loginType + "=([^&]*)(&|$)");
		var loginTypeValue = window.location.search.substr(1).match(reg1);
		var loginChannel = "http://7xjasw.com2.z0.glb.qiniucdn.com/xiaoerzuche_v221_ch0_release.apk";
		if (loginTypeValue != null && loginTypeValue[2] != null) {
			loginChannel = "http://7xjasw.com2.z0.glb.qiniucdn.com/xiaoerzuche_v221_ch"+loginTypeValue[2]+".apk";
		}
        $(".a1").click(function () {
            if (isWeiXin()) { 
                show(true);
            }
            else {  
                location.href = loginChannel;
			}
        }) 
		$(".a2").click(function () {
            if (isWeiXin()) { 
                show(true);
            }
            else { 
				location.href="https://itunes.apple.com/us/app/xiao-er-zu-che/id976054169?mt=8";				 
            }
        })
    })
