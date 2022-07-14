<template>
<div class="site-wrap">
<!--Account-->
    <main>
        <div class="row">
            <div class="col-3">
                <!-- Tab navs -->
                <div
                class="nav flex-column nav-tabs text-center"
                id="v-tabs-tab"
                role="tablist"
                aria-orientation="vertical"
                >
                <a
                    class="nav-link active"
                    id="v-tabs-home-tab"
                    data-mdb-toggle="tab"
                    href="#v-tabs-home"
                    role="tab"
                    aria-controls="v-tabs-home"
                    aria-selected="true"
                    >Home</a
                >
                <a
                    class="nav-link"
                    id="v-tabs-profile-tab"
                    data-mdb-toggle="tab"
                    href="#v-tabs-profile"
                    role="tab"
                    aria-controls="v-tabs-profile"
                    aria-selected="false"
                    >Profile</a
                >
                <a
                    class="nav-link"
                    id="v-tabs-messages-tab"
                    data-mdb-toggle="tab"
                    href="#v-tabs-messages"
                    role="tab"
                    aria-controls="v-tabs-messages"
                    aria-selected="false"
                    >Messages</a
                >
                </div>
                <!-- Tab navs -->
            </div>

            <div class="col-9">
                <!-- Tab content -->
                <div class="tab-content" id="v-tabs-tabContent">
                <div
                    class="tab-pane fade show active"
                    id="v-tabs-home"
                    role="tabpanel"
                    aria-labelledby="v-tabs-home-tab"
                >
                    Home content
                </div>
                <div
                    class="tab-pane fade"
                    id="v-tabs-profile"
                    role="tabpanel"
                    aria-labelledby="v-tabs-profile-tab"
                >
                    Profile content
                </div>
                <div
                    class="tab-pane fade"
                    id="v-tabs-messages"
                    role="tabpanel"
                    aria-labelledby="v-tabs-messages-tab"
                >
                    Messages content
                </div>
                </div>
                <!-- Tab content -->
            </div>
            </div>
    </main>
</div>
</template>

<script>
export default {
    name:'AccountInfo'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../public/assets/css/to-fix.css';
</style>