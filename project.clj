(defproject lvlup "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[bidi "2.1.5"]
                 [org.clojure/clojure "1.10.0"]
                 [com.taoensso/nippy "2.14.0" :exclusions [com.taoensso/encore]]
                 [ring-server "0.5.0"]
                 [javax.servlet/servlet-api "2.5"]
                 [binaryage/devtools "0.9.10"]
                 [reagent "0.8.1"]
                 [reagent-utils "0.3.1"]
                 [ring "1.7.1"]
                 [differ "0.3.2"]
                 [re-frame "0.10.5"]
                 ;[ring.middleware.logger "0.5.0"]
                 [com.cognitect/transit-clj "0.8.313" :exclusions [commons-codec]]
                 [bk/ring-gzip "0.3.0"]
                 [duratom "0.4.1"]
                 [ring-transit-middleware "0.1.3"]
                 [com.novemberain/monger "3.5.0"]
                 [com.google.guava/guava "27.1-jre"]
                 [ring/ring-defaults        "0.3.2"]
                 [compojure "1.6.1" :exclusions [commons-codec]]
                 [dk.ative/docjure "1.12.0"]
                 [org.clojure/core.async "0.4.490"]
                 [day8.re-frame/async-flow-fx "0.0.9"]

                 [hiccup "1.0.5"]
                 [yogthos/config "0.8"]
                 [org.clojure/clojurescript "1.10.520"]
                 [com.draines/postal "2.0.0"]
                 [com.taoensso/sente "1.14.0-RC2" :exclusions [ring/ring-core]]
                 ;[clojure-guava "0.0.8"]
                 [buddy/buddy-auth "2.1.0" :exclusions [cheshire commons-codec com.fasterxml.jackson.core/jackson-core]]
                 [buddy/buddy-hashers "1.3.0" :exclusions [cheshire commons-codec com.fasterxml.jackson.core/jackson-core]]
                 [cljs-ajax "0.5.8" :exclusions [commons-codec]]
                 [com.andrewmcveigh/cljs-time "0.5.0"]
                 [clj-time "0.15.0"]
                 [com.taoensso/timbre       "4.7.4"]
                 [http-kit "2.3.0"]
                 [clj-commons/secretary "1.2.4"]
                 ;[jayq "2.5.4"]
                 [venantius/accountant "0.2.4"]]


  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-asset-minifier "0.2.7"
             :exclusions [org.clojure/clojure]]]

  :ring {:handler lvlup.handler/app
         :uberwar-name "lvlup.war"}

  :min-lein-version "2.5.0"

  :uberjar-name "lvlup.jar"

  :main lvlup.server

  :clean-targets ^{:protect false}
  [:target-path
   [:cljsbuild :builds :app :compiler :output-dir]
   [:cljsbuild :builds :app :compiler :output-to]]

  :source-paths ["src/clj" "src/cljc"]
  :resource-paths ["resources" "target/cljsbuild"]

  :minify-assets
  {:assets
   {"resources/public/css/style.min.css" "resources/public/css/style.css"}}

  :cljsbuild
  {:builds {:min
            {:source-paths ["src/cljs" "src/cljc" "env/prod/cljs"]
             :compiler
                           {:output-to "target/cljsbuild/public/js/app.js"
                            :output-dir "target/uberjar"
                            :optimizations :simple
                            :externs ["externs/jquery.js"]

                            :pretty-print  false}}
            :app
            {:source-paths ["src/cljs" "src/cljc" "env/dev/cljs"]
             :compiler
                           {:closure-defines      {"re_frame.trace.trace_enabled_QMARK_" true}
                            :preloads             [day8.re-frame-10x.preload]
                            :main "lvlup.dev"
                            :asset-path "/js/out"
                            :output-to "target/cljsbuild/public/js/app.js"
                            :output-dir "target/cljsbuild/public/js/out"
                            :source-map true
                            :optimizations :none
                            :pretty-print  true}}}} :figwheel
  {:http-server-root "public"
   :server-port 3449
   :nrepl-port 7002
   :nrepl-middleware ["cider.piggieback/wrap-cljs-repl"]

   :css-dirs ["resources/public/css"]
   :ring-handler lvlup.handler/app}
  :profiles {:dev {:repl-options {:init-ns lvlup.repl
                                  :nrepl-middleware [cider.piggieback/wrap-cljs-repl]}

                   :dependencies [[day8.re-frame/re-frame-10x "0.3.3"]
                                  ;[ring/ring-mock "0.3.0"]
                                  ;[ring/ring-devel "1.7.0"]
                                  [prone "1.1.4"]
                                  [figwheel-sidecar "0.5.18"]
                                  [org.clojure/tools.nrepl "0.2.13"]
                                  [cider/piggieback "0.4.0"]
                                  [pjstadig/humane-test-output "0.8.1"]] :source-paths ["env/dev/clj"]
                   :plugins [[lein-figwheel "0.5.18"]] :injections [(require 'pjstadig.humane-test-output)
                                                                    (pjstadig.humane-test-output/activate!)]

                   :env {:dev true}}

             :uberjar {;:hooks [minify-assets.plugin/hooks]
                       :source-paths ["env/prod/clj"]
                       :prep-tasks ["compile" ["cljsbuild" "once" "min"]]
                       :env {:production true}
                       :aot :all
                       :omit-source true}})
