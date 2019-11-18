<template>
  <v-app>
    <v-content>

      <v-toolbar :dark="true" flat>
          <v-toolbar-title>Parallel Text Viewer with TEI & IIIF</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon @click.stop="dialog_settings = true">
            <v-icon>mdi-settings</v-icon>
          </v-btn>

          <v-btn icon @click.stop="dialog_information = true">
            <v-icon>mdi-information</v-icon>
          </v-btn>
          <v-toolbar-items>
            <v-btn text :href="return_url">{{return_label}}</v-btn>
          </v-toolbar-items>
        </v-toolbar>

      <div :style="'height: '+height+'px;'">
        <splitpanes class="default-theme">
          <pane min-size="20">
            <iframe
              class="py-2 px-2"
              src="https://nakamura196.github.io/genji/mirador2/index_params.html?params=[{&quot;manifest&quot;:&quot;https://nakamura196.github.io/genji/ugm/utokyo/manifest/01.json&quot;},{&quot;manifest&quot;:&quot;https://nakamura196.github.io/genji/ugm/kyushu/manifest/01.json&quot;},{&quot;manifest&quot;:&quot;https://nakamura196.github.io/genji/ugm/kyushu2/manifest/01.json&quot;}]&amp;annotationState=on"
              seamless="seamless"
              width="100%"
              :height="height+'px'"
              style="border: none;"
            ></iframe>
          </pane>
          <pane>
            <splitpanes class="default-theme" horizontal="horizontal">
              <pane class="py-2 mx-2">
                <v-card class="scroll vertical" :flat="true">
                  <v-card-text class="mx-2 text--primary">
                    <p class="display-1 text--primary">表示テスト</p>

                    <div>
                      東京大学総合図書館所蔵『源氏物語』の公開（2019年6月）を契機に、有志により「『源氏物語』研究にとって有意義なデジタル機能は何か」という検討が始まりました。その成果の一環として、ここに「デジタル源氏物語」を試験公開しました。 当サイトでは『源氏物語』に関する様々な関連データを収集・作成し、それらを結びつけることで、『源氏物語』研究はもちろん、古典籍を利用した教育・研究活動の一助となる環境の提案を目指しています。また研究目的以外でも、『源氏物語』を広く楽しんでもらえるような機能の提供も視野に入れ検討を進めています。
                      東京大学総合図書館所蔵『源氏物語』の公開（2019年6月）を契機に、有志により「『源氏物語』研究にとって有意義なデジタル機能は何か」という検討が始まりました。その成果の一環として、ここに「デジタル源氏物語」を試験公開しました。 当サイトでは『源氏物語』に関する様々な関連データを収集・作成し、それらを結びつけることで、『源氏物語』研究はもちろん、古典籍を利用した教育・研究活動の一助となる環境の提案を目指しています。また研究目的以外でも、『源氏物語』を広く楽しんでもらえるような機能の提供も視野に入れ検討を進めています。東京大学総合図書館所蔵『源氏物語』の公開（2019年6月）を契機に、有志により「『源氏物語』研究にとって有意義なデジタル機能は何か」という検討が始まりました。その成果の一環として、ここに「デジタル源氏物語」を試験公開しました。 当サイトでは『源氏物語』に関する様々な関連データを収集・作成し、それらを結びつけることで、『源氏物語』研究はもちろん、古典籍を利用した教育・研究活動の一助となる環境の提案を目指しています。また研究目的以外でも、『源氏物語』を広く楽しんでもらえるような機能の提供も視野に入れ検討を進めています。東京大学総合図書館所蔵『源氏物語』の公開（2019年6月）を契機に、有志により「『源氏物語』研究にとって有意義なデジタル機能は何か」という検討が始まりました。その成果の一環として、ここに「デジタル源氏物語」を試験公開しました。 当サイトでは『源氏物語』に関する様々な関連データを収集・作成し、それらを結びつけることで、『源氏物語』研究はもちろん、古典籍を利用した教育・研究活動の一助となる環境の提案を目指しています。また研究目的以外でも、『源氏物語』を広く楽しんでもらえるような機能の提供も視野に入れ検討を進めています。東京大学総合図書館所蔵『源氏物語』の公開（2019年6月）を契機に、有志により「『源氏物語』研究にとって有意義なデジタル機能は何か」という検討が始まりました。その成果の一環として、ここに「デジタル源氏物語」を試験公開しました。 当サイトでは『源氏物語』に関する様々な関連データを収集・作成し、それらを結びつけることで、『源氏物語』研究はもちろん、古典籍を利用した教育・研究活動の一助となる環境の提案を目指しています。また研究目的以外でも、『源氏物語』を広く楽しんでもらえるような機能の提供も視野に入れ検討を進めています。東京大学総合図書館所蔵『源氏物語』の公開（2019年6月）を契機に、有志により「『源氏物語』研究にとって有意義なデジタル機能は何か」という検討が始まりました。その成果の一環として、ここに「デジタル源氏物語」を試験公開しました。 当サイトでは『源氏物語』に関する様々な関連データを収集・作成し、それらを結びつけることで、『源氏物語』研究はもちろん、古典籍を利用した教育・研究活動の一助となる環境の提案を目指しています。また研究目的以外でも、『源氏物語』を広く楽しんでもらえるような機能の提供も視野に入れ検討を進めています。東京大学総合図書館所蔵『源氏物語』の公開（2019年6月）を契機に、有志により「『源氏物語』研究にとって有意義なデジタル機能は何か」という検討が始まりました。その成果の一環として、ここに「デジタル源氏物語」を試験公開しました。 当サイトでは『源氏物語』に関する様々な関連データを収集・作成し、それらを結びつけることで、『源氏物語』研究はもちろん、古典籍を利用した教育・研究活動の一助となる環境の提案を目指しています。また研究目的以外でも、『源氏物語』を広く楽しんでもらえるような機能の提供も視野に入れ検討を進めています。東京大学総合図書館所蔵『源氏物語』の公開（2019年6月）を契機に、有志により「『源氏物語』研究にとって有意義なデジタル機能は何か」という検討が始まりました。その成果の一環として、ここに「デジタル源氏物語」を試験公開しました。 当サイトでは『源氏物語』に関する様々な関連データを収集・作成し、それらを結びつけることで、『源氏物語』研究はもちろん、古典籍を利用した教育・研究活動の一助となる環境の提案を目指しています。また研究目的以外でも、『源氏物語』を広く楽しんでもらえるような機能の提供も視野に入れ検討を進めています。東京大学総合図書館所蔵『源氏物語』の公開（2019年6月）を契機に、有志により「『源氏物語』研究にとって有意義なデジタル機能は何か」という検討が始まりました。その成果の一環として、ここに「デジタル源氏物語」を試験公開しました。 当サイトでは『源氏物語』に関する様々な関連データを収集・作成し、それらを結びつけることで、『源氏物語』研究はもちろん、古典籍を利用した教育・研究活動の一助となる環境の提案を目指しています。また研究目的以外でも、『源氏物語』を広く楽しんでもらえるような機能の提供も視野に入れ検討を進めています。東京大学総合図書館所蔵『源氏物語』の公開（2019年6月）を契機に、有志により「『源氏物語』研究にとって有意義なデジタル機能は何か」という検討が始まりました。その成果の一環として、ここに「デジタル源氏物語」を試験公開しました。 当サイトでは『源氏物語』に関する様々な関連データを収集・作成し、それらを結びつけることで、『源氏物語』研究はもちろん、古典籍を利用した教育・研究活動の一助となる環境の提案を目指しています。また研究目的以外でも、『源氏物語』を広く楽しんでもらえるような機能の提供も視野に入れ検討を進めています。東京大学総合図書館所蔵『源氏物語』の公開（2019年6月）を契機に、有志により「『源氏物語』研究にとって有意義なデジタル機能は何か」という検討が始まりました。その成果の一環として、ここに「デジタル源氏物語」を試験公開しました。 当サイトでは『源氏物語』に関する様々な関連データを収集・作成し、それらを結びつけることで、『源氏物語』研究はもちろん、古典籍を利用した教育・研究活動の一助となる環境の提案を目指しています。また研究目的以外でも、『源氏物語』を広く楽しんでもらえるような機能の提供も視野に入れ検討を進めています。東京大学総合図書館所蔵『源氏物語』の公開（2019年6月）を契機に、有志により「『源氏物語』研究にとって有意義なデジタル機能は何か」という検討が始まりました。その成果の一環として、ここに「デジタル源氏物語」を試験公開しました。 当サイトでは『源氏物語』に関する様々な関連データを収集・作成し、それらを結びつけることで、『源氏物語』研究はもちろん、古典籍を利用した教育・研究活動の一助となる環境の提案を目指しています。また研究目的以外でも、『源氏物語』を広く楽しんでもらえるような機能の提供も視野に入れ検討を進めています。東京大学総合図書館所蔵『源氏物語』の公開（2019年6月）を契機に、有志により「『源氏物語』研究にとって有意義なデジタル機能は何か」という検討が始まりました。その成果の一環として、ここに「デジタル源氏物語」を試験公開しました。 当サイトでは『源氏物語』に関する様々な関連データを収集・作成し、それらを結びつけることで、『源氏物語』研究はもちろん、古典籍を利用した教育・研究活動の一助となる環境の提案を目指しています。また研究目的以外でも、『源氏物語』を広く楽しんでもらえるような機能の提供も視野に入れ検討を進めています。東京大学総合図書館所蔵『源氏物語』の公開（2019年6月）を契機に、有志により「『源氏物語』研究にとって有意義なデジタル機能は何か」という検討が始まりました。その成果の一環として、ここに「デジタル源氏物語」を試験公開しました。 当サイトでは『源氏物語』に関する様々な関連データを収集・作成し、それらを結びつけることで、『源氏物語』研究はもちろん、古典籍を利用した教育・研究活動の一助となる環境の提案を目指しています。また研究目的以外でも、『源氏物語』を広く楽しんでもらえるような機能の提供も視野に入れ検討を進めています。
                    </div>
                  </v-card-text>
                </v-card>
              </pane>
              <pane class="py-2 mx-2">
                <v-card class="scroll vertical" :flat="true">
                  <v-list-item>
                    <v-card-text class="mx-2 text--primary">
                    <p class="display-1 text--primary">表示テスト</p>

                    <div>
                      東京大学総合図書館所蔵『源氏物語』の公開（2019年6月）を契機に、有志により「『源氏物語』研究にとって有意義なデジタル機能は何か」という検討が始まりました。その成果の一環として、ここに「デジタル源氏物語」を試験公開しました。 当サイトでは『源氏物語』に関する様々な関連データを収集・作成し、それらを結びつけることで、『源氏物語』研究はもちろん、古典籍を利用した教育・研究活動の一助となる環境の提案を目指しています。また研究目的以外でも、『源氏物語』を広く楽しんでもらえるような機能の提供も視野に入れ検討を進めています。
                      東京大学総合図書館所蔵『源氏物語』の公開（2019年6月）を契機に、有志により「『源氏物語』研究にとって有意義なデジタル機能は何か」という検討が始まりました。その成果の一環として、ここに「デジタル源氏物語」を試験公開しました。 当サイトでは『源氏物語』に関する様々な関連データを収集・作成し、それらを結びつけることで、『源氏物語』研究はもちろん、古典籍を利用した教育・研究活動の一助となる環境の提案を目指しています。また研究目的以外でも、『源氏物語』を広く楽しんでもらえるような機能の提供も視野に入れ検討を進めています。東京大学総合図書館所蔵『源氏物語』の公開（2019年6月）を契機に、有志により「『源氏物語』研究にとって有意義なデジタル機能は何か」という検討が始まりました。その成果の一環として、ここに「デジタル源氏物語」を試験公開しました。 当サイトでは『源氏物語』に関する様々な関連データを収集・作成し、それらを結びつけることで、『源氏物語』研究はもちろん、古典籍を利用した教育・研究活動の一助となる環境の提案を目指しています。また研究目的以外でも、『源氏物語』を広く楽しんでもらえるような機能の提供も視野に入れ検討を進めています。東京大学総合図書館所蔵『源氏物語』の公開（2019年6月）を契機に、有志により「『源氏物語』研究にとって有意義なデジタル機能は何か」という検討が始まりました。その成果の一環として、ここに「デジタル源氏物語」を試験公開しました。 当サイトでは『源氏物語』に関する様々な関連データを収集・作成し、それらを結びつけることで、『源氏物語』研究はもちろん、古典籍を利用した教育・研究活動の一助となる環境の提案を目指しています。また研究目的以外でも、『源氏物語』を広く楽しんでもらえるような機能の提供も視野に入れ検討を進めています。東京大学総合図書館所蔵『源氏物語』の公開（2019年6月）を契機に、有志により「『源氏物語』研究にとって有意義なデジタル機能は何か」という検討が始まりました。その成果の一環として、ここに「デジタル源氏物語」を試験公開しました。 当サイトでは『源氏物語』に関する様々な関連データを収集・作成し、それらを結びつけることで、『源氏物語』研究はもちろん、古典籍を利用した教育・研究活動の一助となる環境の提案を目指しています。また研究目的以外でも、『源氏物語』を広く楽しんでもらえるような機能の提供も視野に入れ検討を進めています。東京大学総合図書館所蔵『源氏物語』の公開（2019年6月）を契機に、有志により「『源氏物語』研究にとって有意義なデジタル機能は何か」という検討が始まりました。その成果の一環として、ここに「デジタル源氏物語」を試験公開しました。 当サイトでは『源氏物語』に関する様々な関連データを収集・作成し、それらを結びつけることで、『源氏物語』研究はもちろん、古典籍を利用した教育・研究活動の一助となる環境の提案を目指しています。また研究目的以外でも、『源氏物語』を広く楽しんでもらえるような機能の提供も視野に入れ検討を進めています。東京大学総合図書館所蔵『源氏物語』の公開（2019年6月）を契機に、有志により「『源氏物語』研究にとって有意義なデジタル機能は何か」という検討が始まりました。その成果の一環として、ここに「デジタル源氏物語」を試験公開しました。 当サイトでは『源氏物語』に関する様々な関連データを収集・作成し、それらを結びつけることで、『源氏物語』研究はもちろん、古典籍を利用した教育・研究活動の一助となる環境の提案を目指しています。また研究目的以外でも、『源氏物語』を広く楽しんでもらえるような機能の提供も視野に入れ検討を進めています。東京大学総合図書館所蔵『源氏物語』の公開（2019年6月）を契機に、有志により「『源氏物語』研究にとって有意義なデジタル機能は何か」という検討が始まりました。その成果の一環として、ここに「デジタル源氏物語」を試験公開しました。 当サイトでは『源氏物語』に関する様々な関連データを収集・作成し、それらを結びつけることで、『源氏物語』研究はもちろん、古典籍を利用した教育・研究活動の一助となる環境の提案を目指しています。また研究目的以外でも、『源氏物語』を広く楽しんでもらえるような機能の提供も視野に入れ検討を進めています。東京大学総合図書館所蔵『源氏物語』の公開（2019年6月）を契機に、有志により「『源氏物語』研究にとって有意義なデジタル機能は何か」という検討が始まりました。その成果の一環として、ここに「デジタル源氏物語」を試験公開しました。 当サイトでは『源氏物語』に関する様々な関連データを収集・作成し、それらを結びつけることで、『源氏物語』研究はもちろん、古典籍を利用した教育・研究活動の一助となる環境の提案を目指しています。また研究目的以外でも、『源氏物語』を広く楽しんでもらえるような機能の提供も視野に入れ検討を進めています。東京大学総合図書館所蔵『源氏物語』の公開（2019年6月）を契機に、有志により「『源氏物語』研究にとって有意義なデジタル機能は何か」という検討が始まりました。その成果の一環として、ここに「デジタル源氏物語」を試験公開しました。 当サイトでは『源氏物語』に関する様々な関連データを収集・作成し、それらを結びつけることで、『源氏物語』研究はもちろん、古典籍を利用した教育・研究活動の一助となる環境の提案を目指しています。また研究目的以外でも、『源氏物語』を広く楽しんでもらえるような機能の提供も視野に入れ検討を進めています。東京大学総合図書館所蔵『源氏物語』の公開（2019年6月）を契機に、有志により「『源氏物語』研究にとって有意義なデジタル機能は何か」という検討が始まりました。その成果の一環として、ここに「デジタル源氏物語」を試験公開しました。 当サイトでは『源氏物語』に関する様々な関連データを収集・作成し、それらを結びつけることで、『源氏物語』研究はもちろん、古典籍を利用した教育・研究活動の一助となる環境の提案を目指しています。また研究目的以外でも、『源氏物語』を広く楽しんでもらえるような機能の提供も視野に入れ検討を進めています。東京大学総合図書館所蔵『源氏物語』の公開（2019年6月）を契機に、有志により「『源氏物語』研究にとって有意義なデジタル機能は何か」という検討が始まりました。その成果の一環として、ここに「デジタル源氏物語」を試験公開しました。 当サイトでは『源氏物語』に関する様々な関連データを収集・作成し、それらを結びつけることで、『源氏物語』研究はもちろん、古典籍を利用した教育・研究活動の一助となる環境の提案を目指しています。また研究目的以外でも、『源氏物語』を広く楽しんでもらえるような機能の提供も視野に入れ検討を進めています。東京大学総合図書館所蔵『源氏物語』の公開（2019年6月）を契機に、有志により「『源氏物語』研究にとって有意義なデジタル機能は何か」という検討が始まりました。その成果の一環として、ここに「デジタル源氏物語」を試験公開しました。 当サイトでは『源氏物語』に関する様々な関連データを収集・作成し、それらを結びつけることで、『源氏物語』研究はもちろん、古典籍を利用した教育・研究活動の一助となる環境の提案を目指しています。また研究目的以外でも、『源氏物語』を広く楽しんでもらえるような機能の提供も視野に入れ検討を進めています。東京大学総合図書館所蔵『源氏物語』の公開（2019年6月）を契機に、有志により「『源氏物語』研究にとって有意義なデジタル機能は何か」という検討が始まりました。その成果の一環として、ここに「デジタル源氏物語」を試験公開しました。 当サイトでは『源氏物語』に関する様々な関連データを収集・作成し、それらを結びつけることで、『源氏物語』研究はもちろん、古典籍を利用した教育・研究活動の一助となる環境の提案を目指しています。また研究目的以外でも、『源氏物語』を広く楽しんでもらえるような機能の提供も視野に入れ検討を進めています。
                    </div>
                  </v-card-text>
                  </v-list-item>
                </v-card>
              </pane>
            </splitpanes>
          </pane>
        </splitpanes>

        
      </div>
    </v-content>

  <v-dialog
      v-model="dialog_information"
      width="600px"
      >
      <v-card>
        <v-card-title class="headline">このツールの説明</v-card-title>

        <v-card-text>
          Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
          color="secondary"
            @click="dialog_information = false"
          >
            閉じる
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="dialog_settings"
      width="600px"
      >
      <v-card>
        <v-card-title class="headline">設定</v-card-title>

        <v-card-text>
          Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
          color="secondary"
            @click="dialog_settings = false"
          >
            閉じる
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-app>
</template>

<script>
// In your VueJS component.
import { Splitpanes, Pane } from "splitpanes";
import axios from "axios";

export default {
  components: { Splitpanes, Pane },
  data: function() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      return_url: null,
      return_label: null,
      dialog_information: false,
      dialog_settings: false,
      url_main: "https://nakamura196.github.io/kouigenjimonogatari/tei/01.xml",
      url_sub:"",
      test: ""
    };
  },
  watch: {
    $route() {
      this.search();
    }
  },
  methods: {
    handleResize: function() {
      // resizeのたびにこいつが発火するので、ここでやりたいことをやる
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    }
  },
  mounted: function() {
    window.addEventListener("resize", this.handleResize);

    let u = this.$route.query.u ? this.$route.query.u : "https://api.myjson.com/bins/184z42"

    axios
      .get(u)
      .then(response => {
        let result = response.data;

        this.return_url = result.return_url;
        this.return_label = result.return_label;
        this.url_main = result.url_main;
      })

    /*
    this.return_url = this.$route.query.return_url
      ? this.$route.query.return_url
      : null;
      */

    this.url_main = this.$route.query.url_main
      ? this.$route.query.url_main
      : this.url_main

    axios
        .get(this.url_main, {
          responseType: "document"
        })
        .then(response => {
          //let lines_org = {};
          //this.lines_org = lines_org;

          let xml = response.data;
          xml = new XMLSerializer().serializeToString(xml)

          //var result1 = convert.xml2json(xml, {compact: true, spaces: 4});
          var result2 = convert.xml2json(xml, {compact: false, spaces: 4});
          //console.log(result1, '\n', result2);
          result2 = JSON.parse(result2)

          let facsimile = result2.elements[0].elements[1]
          this.test += facsimile

          let text = result2.elements[0].elements[2]


          //console.log(facsimile)
          let elements = text.elements[0].elements[0].elements
          //console.log(elements)

          for(var i = 0; i < elements.length; i++){
            let el = elements[i]
            if(el.name == "seg" && el.attributes.corresp){
              //console.log(el)
              let text = el.elements[0].text
              //console.log(text)
              this.test += text
            }
          }

          /*
          const lines = xml.querySelectorAll("seg[corresp]");

          for (let i = 0; i < lines.length; i++) {
            let line = lines[i];

            let line_id = line.attributes[0].value;
            line_id = "l"+line_id.split("/data/")[1].replace(".json", "")

            let nodes = line.childNodes;

            let line_obj = {
              array: [],
              selected: false
            };

            let line_index = Number(line_id.split("-")[1]);
            if (line_index == 1) {
              line_obj["page"] = Number(line_id.split("-")[0].slice(1));
            }

            lines_org[line_id] = line_obj;

            for (let j = 0; j < nodes.length; j++) {
              let node = nodes[j];

              let obj = {
                text: node.innerText || node.textContent
              };

              if (node.nodeType != Node.TEXT_NODE) {
                let id = node.attributes[0].value.split("#")[1];

                let stmt = xml.querySelector("note[*|id='" + id + "']");

                obj["note"] = stmt.innerHTML;
              }

              line_obj["array"].push(obj);
            }
            
          }
          */
          
        });

    /*
    this.url_modern = this.$route.query.right
      ? this.$route.query.right
      : this.url_modern;
    this.url_map = this.$route.query.map ? this.$route.query.map : this.url_map;
    */

    var convert = require('xml-js');
    /*
    var xml =
    '<?xml version="1.0" encoding="utf-8"?>' +
    '<note importance="high" logged="true">' +
    '    <title>Happy</title>' +
    '    <todo>Work</todo>' +
    '    <todo>Play</todo>' +
    '</note>';
    */
    
  },
  beforeDestroy: function() {
    window.removeEventListener("resize", this.handleResize);
  }
};
</script>

<style>
.scroll {
  height: 100%;
  overflow-y: auto;
}

.vertical {
  -webkit-writing-mode: vertical-rl;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
}

html,
body,
#app {
  height: 100%;
  margin: 0;
}
</style>
