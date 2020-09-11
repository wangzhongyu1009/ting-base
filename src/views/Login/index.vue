<!--
  Generated template for the Login page.
  Created by Wang Zhongyu on 2019/04/22.
  If necessary, Please contact zy.wang@muheda.com
-->

<template>
  <div class="login">
    <div class="outer_box">
      <div class="inner_box">
        <div class="login_form_container">
          <div class="login_title">
            {{$t('login.login_bt')}}
          </div>
          <Form
            :model="loginForm"
            class="login_form"
          >
            <FormItem>
              <Input
                v-model="loginForm.userName"
                :placeholder="$t('login.login_qsryhm')"
                class="login_input"
              />
            </FormItem>
            <FormItem>
              <Input
                v-model="loginForm.password"
                :placeholder="$t('login.login_qsrmm')"
                type="password"
                class="login_input"
              />
            </FormItem>
            <FormItem>
              <Input
                v-model="loginForm.code"
                :placeholder="$t('login.login_tpyzm')"
                class="login_input input_code"
              />
              <span class="code">{{ verificationCode }}</span>
              <span
                class="change_code_btn"
                @click="changeCode"
              >{{$t('login.login_hyz')}}</span>
            </FormItem>
            <FormItem>
              <Button
                class="submit_btn"
                type="primary"
                @click="login"
              >
                {{$t('login.login_dl')}}
              </Button>
            </FormItem>
            <FormItem style="position:relative">
              <Dropdown @on-click="changeLang" style="position:absolute;top:-8px">
                <span class="text_name">{{languageName}}</span>
                <Dropdown-menu slot="list">
                  <Dropdown-item name="zhCN">中文</Dropdown-item>
                  <Dropdown-item name="en">English</Dropdown-item>
                </Dropdown-menu>
              </Dropdown>
              <div
                class="reset_psw_btn"
                @click="resetPassword"
              >
                {{$t('login.login_wjmm')}}
              </div>
            </FormItem>
          </Form>
        </div>
      </div>
    </div>

    <Modal
      v-model="modal"
      :mask-closable="false"
      class
    >
      <p slot="header">
        {{$t('login.login_zhmm')}}
      </p>
      <div style="margin-right:80px">
        <Form
          ref="oForm"
          :model="resetPswForm"
          :label-width="100"
        >
          <FormItem
            :label="$t('login.login_yhm')"
            prop="userName"
          >
            <Input
              v-model="resetPswForm.userName"
              :placeholder="$t('login.login_qsryhm')"
            />
          </FormItem>
          <FormItem
            :label="$t('login.login_yxdz')"
            prop="email"
          >
            <Input
              v-model="resetPswForm.email"
              :placeholder="$t('login.login_qsrdzyxdz')"
            />
          </FormItem>
          <FormItem
            :label="$t('login.login_yzm')"
            prop="code"
          >
            <Input
              v-model="resetPswForm.code"
              :placeholder="$t('common.common_qsr')"
              class="modal_code_input"
              style="width:50%;vertical-align:top"
            />
            <span class="modal_code">{{ verificationCode }}</span>
            <span
              class="modal_change_code_btn"
              @click="changeCode"
            >{{$t('login.login_hyz')}}</span>
          </FormItem>
        </Form>
      </div>
      <div slot="footer">
        <t-button
          :text="$t('common.common_qd')"
          @click="submit"
        />
      </div>
    </Modal>
  </div>
</template>

<script src="./src/index.js"></script>

<style lang="scss" scoped src="./src/style.scss"></style>
