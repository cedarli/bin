#!/bin/sh
#configuration jelly enviroment parameter 

#clear ood PATH
export SDK_ROOT=$HOME/.$USER/local/adt_bundle_linux/sdk/
export CTS_ROOT=$HOME/.$USER/local/adt_bundle_linux

adb install -r $CTS_ROOT/android-cts/repository/testcases/CtsDeviceAdmin.apk
export PATH=$CEDAR_LOGIN
#setup enviroment jdk1.6
if [ -f $HOME/.$USER/local/java/bin/jdk1.6 ] ; then
    source $HOME/.$USER/local/java/bin/jdk1.6
fi

if [ -f $CTS_ROOT/android-cts/tools/cts-tradefed ] ; then
    cd $CTS_ROOT/android-cts/tools
    ./cts-tradefed
fi
