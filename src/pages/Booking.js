import React from "react";
import { ReactComponent as Left } from "../images/left.svg";
import { useMediaQuery, useTheme } from "@mui/material";

export default function Booking() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: isMobile ? "100%" : "1120px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button
            onClick={() => window.history.back()}
            className="button_only_icon  button_white button-animate-filter"
            style={{
              display: "flex",
              alignItems: "center",
              height: "36px",
              width: "36px",
              // boxShadow:
              //   "0 0 0 1px transparent, 0 0 0 4px transparent, 0 0 0 0.5px #E0E0E0", // Пример имитации границы
              // backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              zIndex: 1000, // Убедитесь, что кнопка находится поверх других элементов
            }}
          >
            <Left style={{ fill: "white", width: "80px", height: "80px" }} />
          </button>
          <div className="h4" style={{ marginLeft: "12px" }}>
            Подтвердите и оплатите
          </div>
        </div>

        <div className="h5" style={{ marginTop: "16px" }}>
          Ваши занятия
        </div>
        <div className="Body-3" style={{ marginTop: "12px" }}>
          Формат оплаты:
        </div>
        <div className="Body-2" style={{ marginTop: "8px" }}>
          Оплачивать ежемесячно
        </div>
        <div className="Body-3" style={{ marginTop: "12px" }}>
          Даты
        </div>
        <div className="Body-2" style={{ marginTop: "8px" }}>
          Старт обучения: 7 сентября
        </div>
        <div className="Body-2" style={{ marginTop: "8px" }}>
          Длительность: сентябрь 2024 - май 2025
        </div>
        <div className="Body-3" style={{ marginTop: "12px" }}>
          Оплата:
        </div>
        <div>Оплачивать ежемесячно</div>
        <div>Требуется для записи</div>
        <div>Кто записывает:</div>
        <div>
          <div>Я ученик</div>
          <div>Я родитель</div>
          <div>Я менеджер</div>
        </div>
        <div>Форма</div>
        <div>Правила отмены</div>
        <div>
          Отмена и полный возврат возможны за 2 дня до начала курса. После этого
          срока отмена участия и возврат средств не предусмотрены.
        </div>
        <div>
          Компания не осуществляет перерасчеты и переносы в случае пропуска
          занятия, включая случаи со справкой.
        </div>
        <div>
          При недоборе участников или других препятствиях курсы отменяются с
          возвратом оплаты за несостоявшиеся занятия.
        </div>
        <div>
          Продолжая, вы соглашаетесь с положениями основных документов
          Anirum — Условия предоставления услуг и  Политика конфиденциальности —
          и подтверждаете, что прочли их.
        </div>
        <div>Подтвердить и оплатить</div>
      </div>
    </div>
  );
}
