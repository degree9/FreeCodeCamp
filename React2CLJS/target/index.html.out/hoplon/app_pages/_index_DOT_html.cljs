(ns hoplon.app-pages._index_DOT_html (:require [hoplon.bidi :as bidi] [app.routing :as routing] [app.home :as home] [app.picture :as pic] [javelin.core :refer [->Cell input? cell cell? destroy-cell! lift lens? set-formula! cell-doseq* deref* set-cell! lens formula? alts! dosync* cell-map formula]] [hoplon.jquery :refer [check-val! text-val!]] [hoplon.core :refer [form audio input menuitem hgroup do! timeout $text base h1 set-attributes! embed shadow h3 body keygen progress main cite on-page-load i p nav ruby a menu blockquote img $comment span track data u dl select html thead del fieldset aside figure figcaption q on! bdi append-child! video address caption dd rp hr tbody table html-var add-initfn! pre ul replace-child! html-time html-map sup dfn sub mark script button wbr insert-before! strong li dt rtc td tr section th optgroup bust-cache iframe remove-child! legend em kbd spliced html-object article abbr template multicol prerendering? <!-- source output set-styles! route-cell header datalist tfoot s ins footer title h5 canvas param div option summary samp small style textarea loop-tpl* h4 head ol details col label picture rt when-dom h6 link page-load colgroup meter html-meta static-elements bdo --> b code dialog noframes do-watch noscript safe-nth h2 area br]]) (:require-macros [hoplon.bidi :refer [route-tpl]] [javelin.core :refer [with-let mx2 dosync cell= set-cell!= prop-cell cell-doseq defc cell-let-1 defc= macroexpand-all mx cell-let]] [hoplon.core :refer [text elem+ cache-key with-timeout defelem+ when-tpl static sexp defelem elem def-values if-tpl cond-tpl with-page-load for-tpl with-dom case-tpl loop-tpl with-interval with-init!]]))






(defelem not-found [attr kids]
  (div :class "dt w-100 h-100 pv4 ph2 tc "
    (div :class "dtc v-mid"
      (h1 :class "f1 mt0" "404 Page Not Found"))))

(html
  (head
    (html-meta :charset "utf8")
    (html-meta :name "viewport" :content "width=device-width, initial-scale=1")
    (link :rel "shortcut icon" :href "favicon.ico")
    (title "React2Cljs App")

    ;; Tachyons CSS
    (link :rel "stylesheet" :href "https://unpkg.com/tachyons@4.5.3/css/tachyons.min.css")
    ;; App CSS
    (link :rel "stylesheet" :href "App.css")
    ;; Home CSS
    (link :rel "stylesheet" :href "Home.css")
    )
  (body
    (route-tpl routing/routes
      :index (home/index)
      :picture (pic/index)
      :not-found (not-found))))
